import React from 'react';

import { Languages, Data } from './utils/utils';

export interface Context {
  articles: Data[];
  currentArticle: Data | null;
  setCurrentArticle: (id: number) => void;
  selectedLanguage: Languages;
  changeLanguage: (value: Languages) => void;
  addArticle: (item: Data) => void;
  editArticle: (item: Data) => void;
}

export const ArticlesContext = React.createContext<Context | null>(null);
