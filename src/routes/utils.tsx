import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Languages } from '../utils/utils';

export const mapRoutes = (routes: RouteProps[]): React.ReactNode => (
  routes.map((route: RouteProps) => <Route key={route.path as string} {...route} />)
);

export interface Params {
  id: string;
  lang: Languages;
}
