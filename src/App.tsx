import React, { useState, useEffect } from 'react';

import RouterMap from './routes/router';
import { ArticlesContext } from './context';
import { Languages, Data, MOCK_DATA } from './utils/utils';

const App = () => {
  const [articles, setArticles] = useState<Data[]>([]);
  const [article, setArticle] = useState<Data | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Languages>(Languages.english);

  const changeLanguage = (value: Languages) => {
    setSelectedLanguage(value);
  };

  const addArticle = (item: Data) => {
    setArticles([...articles, item]);
  };

  const editArticle = (item: Data) => {
    const updatedArr = articles.map((object: Data) => (item.id === object.id ? { ...item } : object));
    setArticles(updatedArr);
  };

  const setCurrentArticle = (id: number) => {
    const record = articles?.find((item: Data) => item.id === id);
    setArticle(record || null);
  };

  useEffect(() => {
    const newsList = localStorage.getItem('articles');

    const data = (newsList?.length ? JSON.parse(newsList) : MOCK_DATA) as Data[];

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
      addArticle,
      editArticle,
    }}
    >
      <RouterMap />
    </ArticlesContext.Provider>
  );
};

export default App;
