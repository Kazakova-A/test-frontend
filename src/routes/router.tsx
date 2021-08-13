import React, { memo } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { ROUTE } from './routes';

const RouterMap: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {ROUTE.map((route): React.ReactNode => <Route exact key={route.path} {...route} />)}
    </Switch>
  </BrowserRouter>
);

export default memo(RouterMap);
