import React, { useState, useEffect } from 'react';

import RouterMap from './routes/router';
import { ArticlesContext } from './context';
import { MOCK_DATA, Languages, Data } from './utils/utils';

const App = () => {
  const [articles, setArticles] = useState<Data[]>([]);
  const [article, setArticle] = useState<Data | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Languages>('en');

  const changeLanguage = (value: Languages) => {
    setSelectedLanguage(value);
  };

  const setCurrentArticle = (id: number) => {
    const record = articles?.find((item: Data) => item.id === id);
    setArticle(record || null);
  };

  useEffect(() => {
    // adding some mocked articles
    localStorage.setItem('articles', JSON.stringify(MOCK_DATA));

    const newsList = localStorage.getItem('articles');
    const data = (newsList ? JSON.parse(newsList) : null) as Data[];

    setArticles(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(articles));
  }, [articles]);

  return (
    <ArticlesContext.Provider value={{
      articles,
      currentArticle: article,
      selectedLanguage,
      changeLanguage,
      setCurrentArticle,
    }}
    >
      <RouterMap />
    </ArticlesContext.Provider>
  );
};

export default App;
