/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, {
  memo,
  useEffect,
  useContext,
  useMemo,
} from 'react';
import {
  useParams,
  Link,
  useHistory,
  useLocation,
} from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
  console.log('itemIndex', itemIndex);
  const onSelectChange = (event: React.ChangeEvent<{ value: string }>) => {
    const { value } = event.target;
    changeLanguage(value as Languages);
    history.replace(`${ROUTES.article}/${value}/${id.toString()}`);
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
        <h5 className="article-detail__title">
          {currentArticle?.title[selectedLanguage]}
        </h5>
        <div className="article-detail__content">
          {currentArticle?.content[selectedLanguage]}
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
    </Wrapper>
  );
};

export default memo(Article);
