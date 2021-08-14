import React, {
  memo,
  useEffect,
  useContext,
  useMemo,
} from 'react';
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
} from 'react-bootstrap';
import { useParams, Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Languages, SELECT_VALUES } from '../../utils/utils';
import { ArticlesContext, Context } from '../../context';
import { ROUTES } from '../../routes/constants';

import FormComponent from './Form';
import './form.css';

interface ArticleFormParams {
  id? :string;
  lang: Languages;
}

const ArticleForm = (): JSX.Element => {
  const history = useHistory();
  const { id }: ArticleFormParams = useParams();
  const {
    currentArticle,
    setCurrentArticle,
    selectedLanguage,
    changeLanguage,
  } = (useContext<Context | null>(ArticlesContext)) as Context;

  const isEdit = useMemo(() => history.location.pathname.includes(ROUTES.editArticle), [history.location.pathname]);
  const title = useMemo(() => (
    (id && currentArticle) ? `Edit Article: ${currentArticle.title[selectedLanguage]}` : 'Add Article'
  ), [currentArticle, id, selectedLanguage]);

  useEffect(() => {
    if (id) {
      setCurrentArticle(Number(id));
    }
  }, [id, setCurrentArticle]);

  const onSelectChange = (eventKey: Languages) => {
    changeLanguage(eventKey);
    const redirect = isEdit && id
      ? `/${ROUTES.admin}/${eventKey}/${ROUTES.article}/${ROUTES.editArticle}/${id}`
      : `/${ROUTES.admin}/${eventKey}/${ROUTES.article}/${ROUTES.addArticle}`;
    history.replace(redirect);
  };

  return (
    <Container className="p-5">
      <Row>
        <Col
          xs={{ span: 5, offset: 0 }}
          className="p-3"
        >
          <h2 className="form-title">
            {title}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs
            onSelect={(eventKey) => onSelectChange(eventKey as Languages)}
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            activeKey={selectedLanguage}
          >
            {SELECT_VALUES.map((item) => (
              <Tab key={item.key} eventKey={item.key} title={item.title}>
                <FormComponent
                  isEdit={isEdit}
                  record={currentArticle}
                  lang={selectedLanguage}
                />
              </Tab>
            ))}
          </Tabs>
        </Col>
      </Row>
      <Row>
        <Link to={ROUTES.articles}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>
            Back to the listing
          </span>
        </Link>
      </Row>
    </Container>
  );
};

export default memo(ArticleForm);
