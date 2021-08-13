import Articles from '../pages/Articles';
import Article from '../pages/Article';

import { ROUTES } from './constants';

export const ROUTE = [
  {
    path: ROUTES.articles,
    component: Articles,
  },
  {
    path: `${ROUTES.article}/:lang/:id`,
    component: Article,
  },
];
