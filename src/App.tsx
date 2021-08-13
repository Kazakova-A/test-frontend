import React, { useState, useEffect } from 'react';

import RouterMap from './routes/router';
import { NewsContext, Data } from './context';
import { MOCK_DATA } from './utils/constants';

const App = () => {
  const [news, setNews] = useState<Data[] | null>(null);

  useEffect(() => {
    // adding some mocked news
    localStorage.setItem('news', JSON.stringify(MOCK_DATA));

    const newsList = localStorage.getItem('news');
    const data = (newsList ? JSON.parse(newsList) : null) as Data[] | null;

    setNews(data);
  }, []);

  return (
    <NewsContext.Provider value={news}>
      <RouterMap />
    </NewsContext.Provider>
  );
};

export default App;
