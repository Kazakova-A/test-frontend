/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, {
  memo,
  useState,
  useMemo,
  useContext,
  useEffect,
} from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useHistory } from 'react-router-dom';
import { Editor, TextTools } from 'react-bootstrap-editor';

import { ArticlesContext, Context } from '../../context';
import { Data, Languages } from '../../utils/utils';
import { ROUTES } from '../../routes/constants';
import { FormProps } from './types';
// interface FormProps {
//   isEdit?: boolean;
//   record?: Data | null;
//   lang: Languages;
// }

const FormComponent = ({
  // isEdit = false,
  // record = null,
  // lang,
  isEdit,
  articleTitle,
  content,
  isActive,
  date,
  handleTitleChange,
  handleContentChange,
  handleDateChange,
  handleCheckboxChange,
}: FormProps): JSX.Element => {
  const history = useHistory();
  const {
    addArticle,
    editArticle,
    selectedLanguage,
    currentArticle,
  } = useContext<Context | null>(ArticlesContext) as Context;

  const isDisabled = useMemo(() => (
    !articleTitle[selectedLanguage].trim()
    || !content[selectedLanguage].trim()
    || !date
  ), [articleTitle, content, date, selectedLanguage]);

  const addNewArticle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const payload = {
      id: Math.random(),
      title: articleTitle,
      content,
      date: date.getTime() / 1000,
      isActive,
    };
    addArticle(payload);
    history.push(ROUTES.articles);
  };

  const editArticleRecord = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (currentArticle) {
      const payload = {
        id: currentArticle.id,
        title: articleTitle,
        content,
        date: date.getTime() / 1000,
        isActive,
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
            value={articleTitle[selectedLanguage]}
            onChange={(e) => handleTitleChange(e.target.value)}
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
            value={content[selectedLanguage]}
            onChange={(newContent) => handleContentChange(newContent)}
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
            onChange={(value) => handleDateChange(value as Date)}
            minDate={new Date()}
          />
        </Col>
      </Form.Group>
      <Form.Group className="position-relative mb-3">
        <Col xs={{ offset: 2 }}>
          <Form.Check
            label="isActive"
            checked={isActive}
            onChange={() => handleCheckboxChange(!isActive)}
          />
        </Col>
      </Form.Group>
      <Form.Group className="position-relative mb-3">
        <Col xs={{ offset: 2 }}>
          <Button
            variant="outline-primary"
            type="submit"
            disabled={isDisabled}
            onClick={(e) => buttonHandler(
              e as React.MouseEvent<HTMLButtonElement, MouseEvent>,
            )}
          >
            Ok
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default memo(FormComponent);
