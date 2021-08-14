import React, {
  memo,
  useEffect,
  useContext,
  useMemo,
} from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from 'react-bootstrap';
import parser from 'html-react-parser';

import { Params } from '../../routes/utils';
import { Languages, Data } from '../../utils/utils';
import { ArticlesContext, Context } from '../../context';
import Wrapper from '../../components/Wrapper';
import { ROUTES } from '../../routes/constants';

import './article.css';

const Article = (): JSX.Element => {
  const { id }: Params = useParams();
  const history = useHistory();

  const {
    articles,
    currentArticle,
    setCurrentArticle,
    selectedLanguage,
    changeLanguage,
  } = (useContext<Context | null>(ArticlesContext)) as Context;

  const itemIndex = useMemo(() => (
    articles.findIndex((item: Data) => item.id === currentArticle?.id)
  ), [articles, currentArticle?.id]);

  const nextRecorId = articles[itemIndex + 1]?.id || null;
  const prevRecorId = articles[itemIndex - 1]?.id || null;
  const isPrevButtonDisabled = itemIndex === 0;
  const isNextButtonDisabled = itemIndex === articles.length - 1;

  const goNext = () => {
    history.replace(`/${selectedLanguage}/${ROUTES.article}/${nextRecorId as number}`);
  };

  const goPrev = () => {
    history.replace(`/${selectedLanguage}/${ROUTES.article}/${prevRecorId as number}`);
  };

  const onSelectChange = (event: React.ChangeEvent<{ value: string }>) => {
    const { value } = event.target;
    changeLanguage(value as Languages);
    history.replace(`/${value}/${ROUTES.article}/${id}`);
  };

  useEffect(() => {
    setCurrentArticle(Number(id));
  }, [id, setCurrentArticle]);

  const parseDate = currentArticle ? moment(currentArticle?.date * 1000).format('MMMM D, YYYY') : null;

  return (
    <Wrapper
      lang={selectedLanguage}
      onChange={onSelectChange}
    >
      <h2 className="article-subtitle">Article details</h2>
      <div className="article-detail">
        <div>
          <h5 className="article-detail__title">
            {currentArticle?.title[selectedLanguage]}
          </h5>
          <Link to={`/${ROUTES.admin}/${selectedLanguage}/${ROUTES.article}/${ROUTES.editArticle}/${id}`}>
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </div>
        <div className="article-detail__content">
          {parser(currentArticle?.content[selectedLanguage] || '')}
        </div>
        <p className="list-item__date">{parseDate}</p>
        <div className="article-footer">
          <div className="divider" />
          <span>
            <Link to={ROUTES.articles}>
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>
                Back to the listing
              </span>
            </Link>
          </span>
        </div>
      </div>
      <div>
        <Pagination>
          <Pagination.Prev onClick={goPrev} disabled={isPrevButtonDisabled} />
          <Pagination.Next onClick={goNext} disabled={isNextButtonDisabled} />
        </Pagination>
      </div>
    </Wrapper>
  );
};

export default memo(Article);
