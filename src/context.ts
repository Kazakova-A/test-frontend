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
  data: string;
  isActive: boolean;
}

export const NewsContext = React.createContext<Data[] | null>(null);
