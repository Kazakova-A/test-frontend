import Articles from '../pages/Articles';
import Article from '../pages/Article';
import CreateArticle from '../pages/ArticleForm';

import { ROUTES } from './constants';

export const ROUTE = [
  {
    path: ROUTES.articles,
    component: Articles,
  },
  {
    path: `/:lang/${ROUTES.article}/:id`,
    component: Article,
  },
  {
    path: `/${ROUTES.admin}/:lang/${ROUTES.article}/${ROUTES.addArticle}`,
    component: CreateArticle,
  },
  {
    path: `/${ROUTES.admin}/:lang/${ROUTES.article}/${ROUTES.editArticle}/:id`,
    component: CreateArticle,
  },
];
