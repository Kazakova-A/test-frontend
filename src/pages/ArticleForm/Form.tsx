import React, {
  memo,
  useState,
  useMemo,
  useContext,
  useEffect,
} from 'react';
import {
  Form,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { Editor, TextTools } from 'react-bootstrap-editor';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useHistory } from 'react-router-dom';

import { ArticlesContext, Context } from '../../context';
import { Data, Languages } from '../../utils/utils';
import { ROUTES } from '../../routes/constants';

interface FormProps {
  isEdit?: boolean;
  record?: Data | null;
  lang: Languages;
}

const FormComponent = ({
  isEdit = false,
  record = null,
  lang,
}: FormProps): JSX.Element => {
  const history = useHistory();
  const [articleTitle, setTilte] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [checkboxState, setCheckboxState] = useState<boolean>(true);
  const [date, setDate] = useState<Date>(new Date());

  const {
    addArticle,
    editArticle,
  } = (useContext<Context | null>(ArticlesContext)) as Context;

  const isDisabled = useMemo(() => (
    !articleTitle.trim()
    || !content.trim()
    || !date
  ), [articleTitle, content, date]);

  useEffect(() => {
    if (isEdit && record) {
      setTilte(record.title[lang]);
      setCheckboxState(record.isActive);
      setContent(record.content[lang]);
      setDate(new Date(record.date * 1000));
    }
  }, [isEdit, lang, record]);

  const addNewArticle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const payload = {
      id: Math.random(),
      title: {
        en: lang === Languages.english ? articleTitle : '',
        germ: lang === Languages.germany ? articleTitle : '',
        bulg: lang === Languages.bulgarian ? articleTitle : '',
      },
      content: {
        en: lang === Languages.english ? content : '',
        germ: lang === Languages.germany ? content : '',
        bulg: lang === Languages.bulgarian ? content : '',
      },
      date: date.getTime() / 1000,
      isActive: checkboxState,
    };

    addArticle(payload);
    history.push(ROUTES.articles);
  };

  const editArticleRecord = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (record) {
      const payload = {
        id: record.id,
        title: {
          en: lang === Languages.english ? articleTitle : record.title[Languages.english],
          germ: lang === Languages.germany ? articleTitle : record.title[Languages.germany],
          bulg: lang === Languages.bulgarian ? articleTitle : record.title[Languages.bulgarian],
        },
        content: {
          en: lang === Languages.english ? content : record.content[Languages.english],
          germ: lang === Languages.germany ? content : record.content[Languages.germany],
          bulg: lang === Languages.bulgarian ? content : record.content[Languages.bulgarian],
        },
        date: date.getTime() / 1000,
        isActive: checkboxState,
      };

      editArticle(payload);
      history.push(ROUTES.articles);
    }
  };

  const buttonHandler = isEdit ? editArticleRecord : addNewArticle;

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className="required">
          <span>
            Title
            <i className="require-mark">*</i>
          </span>
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Title"
            value={articleTitle}
            onChange={(e) => setTilte(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className="required">
          <span>
            Content
            <i className="require-mark">*</i>
          </span>
        </Form.Label>
        <Col sm="10">
          <Editor
            tools={TextTools}
            value={content}
            onChange={(value) => setContent(value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className="required">
          <span>
            Date
            <i className="require-mark">*</i>
          </span>
        </Form.Label>
        <Col sm="10">
          <DatePicker
            selected={date}
            onChange={(value) => setDate(value as Date)}
            minDate={new Date()}
          />
        </Col>
      </Form.Group>
      <Form.Group className="position-relative mb-3">
        <Col xs={{ offset: 2 }}>
          <Form.Check
            label="isActive"
            checked={checkboxState}
            onChange={() => setCheckboxState(!checkboxState)}
          />
        </Col>
      </Form.Group>
      <Form.Group className="position-relative mb-3">
        <Col xs={{ offset: 2 }}>
          <Button
            variant="outline-primary"
            disabled={isDisabled}
            type="submit"
            onClick={(e) => buttonHandler(e as React.MouseEvent<HTMLButtonElement, MouseEvent>)}
          >
            Ok
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default memo(FormComponent);
