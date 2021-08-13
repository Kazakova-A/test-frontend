import React, { memo, useContext } from 'react';

import { NewsContext } from '../../context';

const News = (): JSX.Element => {
  const news = useContext(NewsContext);

  return (
    <div>{news?.length}</div>
  );
};

export default memo(News);
