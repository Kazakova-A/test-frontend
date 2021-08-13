import News from '../pages/News';
import Article from '../pages/Article';

import { ROUTES } from './constants';

export const ROUTE = [
  {
    path: ROUTES.news,
    component: News,
  },
  {
    path: ROUTES.article,
    component: Article,
  },
];
