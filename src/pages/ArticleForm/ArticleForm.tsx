/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  memo,
  useEffect,
  useContext,
  useMemo,
  useState,
  useCallback,
} from 'react';
import {
  Container, Row, Col, Tabs, Tab,
} from 'react-bootstrap';
import { useParams, Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Languages, SELECT_VALUES } from '../../utils/utils';
import { ArticlesContext, Context } from '../../context';
import { ROUTES } from '../../routes/constants';

import FormComponent from './Form';
import './form.css';
import { ArticleFormParams, InputValues } from './types';

const ArticleForm = (): JSX.Element => {
  const history = useHistory();
  const { id }: ArticleFormParams = useParams();
  const {
    currentArticle,
    setCurrentArticle,
    selectedLanguage,
    changeLanguage,
  } = useContext<Context | null>(ArticlesContext) as Context;

  const [articleTitle, setArticleTilte] = useState<InputValues>({
    [Languages.english]: '',
    [Languages.germany]: '',
    [Languages.bulgarian]: '',
  });

  const [content, setContent] = useState<InputValues>({
    [Languages.english]: '',
    [Languages.germany]: '',
    [Languages.bulgarian]: '',
  });
  const [date, setDate] = useState<Date>(new Date());
  const [isActive, setIsActive] = useState<boolean>(true);

  const isDisabled = useMemo(
    () => !articleTitle[selectedLanguage].trim()
      || !content[selectedLanguage].trim()
      || !date,
    [articleTitle, content, date, selectedLanguage],
  );

  const handleTitleChange = useCallback((value: string) => {
    setArticleTilte({
      ...articleTitle,
      [selectedLanguage]: value,
    });
  }, [articleTitle, selectedLanguage]);

  const handleContentChange = useCallback((value: string) => {
    setContent({
      ...content,
      [selectedLanguage]: value,
    });
  }, [content, selectedLanguage]);

  const isEdit = useMemo(
    () => history.location.pathname.includes(ROUTES.editArticle),
    [history.location.pathname],
  );
  const title = useMemo(
    () => (id && currentArticle
      ? `Edit Article: ${currentArticle.title[selectedLanguage]}`
      : 'Add Article'),
    [currentArticle, id, selectedLanguage],
  );

  const onSelectChange = (eventKey: Languages) => {
    changeLanguage(eventKey);
    const redirect = isEdit && id
      ? `/${ROUTES.admin}/${eventKey}/${ROUTES.article}/${ROUTES.editArticle}/${id}`
      : `/${ROUTES.admin}/${eventKey}/${ROUTES.article}/${ROUTES.addArticle}`;
    history.replace(redirect);
  };

  useEffect(() => {
    if (id) {
      setCurrentArticle(Number(id));
    }
  }, [id, setCurrentArticle]);

  useEffect(() => {
    if (isEdit && currentArticle) {
      handleTitleChange(currentArticle.title[selectedLanguage]);
      handleContentChange(currentArticle.content[selectedLanguage]);
      setDate(new Date(currentArticle.date * 1000));
      setIsActive(currentArticle.isActive);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, selectedLanguage, currentArticle]);

  return (
    <Container className="p-5">
      <Row>
        <Col xs={{ span: 5, offset: 0 }} className="p-3">
          <h2 className="form-title">{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs
            onSelect={(eventKey) => onSelectChange(eventKey as Languages)}
            defaultActiveKey={selectedLanguage}
            className="mb-3"
            activeKey={selectedLanguage}
          >
            {SELECT_VALUES.map((item) => (
              <Tab key={item.key} eventKey={item.key} title={item.title}>
                <FormComponent
                  isEdit={isEdit}
                  articleTitle={articleTitle}
                  content={content}
                  isActive={isActive}
                  date={date}
                  handleTitleChange={handleTitleChange}
                  handleContentChange={handleContentChange}
                  handleDateChange={setDate}
                  handleCheckboxChange={setIsActive}
                />
              </Tab>
            ))}
          </Tabs>
        </Col>
      </Row>
      <Row>
        <Link to={ROUTES.articles}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to the listing</span>
        </Link>
      </Row>
    </Container>
  );
};

export default memo(ArticleForm);
