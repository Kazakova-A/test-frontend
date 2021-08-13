import React, { useState, useEffect } from 'react';

import RouterMap from './routes/router';
import { ArticlesContext, Data } from './context';
import { MOCK_DATA } from './utils/utils';

const App = () => {
  const [articles, setNews] = useState<Data[] | null>(null);

  useEffect(() => {
    // adding some mocked articles
    localStorage.setItem('articles', JSON.stringify(MOCK_DATA));

    const newsList = localStorage.getItem('articles');
    const data = (newsList ? JSON.parse(newsList) : null) as Data[] | null;

    setNews(data);
  }, []);

  return (
    <ArticlesContext.Provider value={articles}>
      <RouterMap />
    </ArticlesContext.Provider>
  );
};

export default App;
