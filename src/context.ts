import React from 'react';

export interface Data {
  id: number;
  title: {
    en: string,
    germ: string;
    bulg: string;
  },
  content: {
    en: string;
    germ: string;
    bulg: string;
  },
  date: number;
  isActive: boolean;
}

export const ArticlesContext = React.createContext<Data[] | null>(null);
