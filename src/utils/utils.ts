import { Data } from '../context';

export const MOCK_DATA: Data[] = [
  {
    id: 1,
    title: {
      en: 'English',
      germ: 'Germany',
      bulg: 'Bulgarian',

    },
    content: {
      en: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      germ: `
        Oscar geht einkaufen in einen großen Supermarkt. Seine Einkaufsliste ist lang,
        er kauft für das ganze Wochenende ein. Außerdem kommen Gäste, für die er kochen wird.
        Beim Obstregal kauft er verschiedene Früchte: Äpfel, Bananen,
        Erdbeeren und Kirschen wird er für den Nachtisch verwenden, es gibt Obstsalat.
        Die Trauben verwendet er für die Vorspeise. Er möchte gerne kleine Spieße mit Käse und Trauben anbieten.
      `,
      bulg: 'Bulgarian',
    },
    date: 1628842977,
    isActive: true,
  },
  {
    id: 2,
    title: {
      en: 'English',
      germ: 'Germany',
      bulg: 'Bulgarian',

    },
    content: {
      en: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      germ: `
        Oscar geht einkaufen in einen großen Supermarkt. Seine Einkaufsliste ist lang,
        er kauft für das ganze Wochenende ein. Außerdem kommen Gäste, für die er kochen wird.
        Beim Obstregal kauft er verschiedene Früchte: Äpfel, Bananen,
        Erdbeeren und Kirschen wird er für den Nachtisch verwenden, es gibt Obstsalat.
        Die Trauben verwendet er für die Vorspeise. Er möchte gerne kleine Spieße mit Käse und Trauben anbieten.
      `,
      bulg: 'Bulgarian',
    },
    date: 1628842977,
    isActive: true,
  },
  {
    id: 3,
    title: {
      en: 'English',
      germ: 'Germany',
      bulg: 'Bulgarian',

    },
    content: {
      en: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      germ: `
        Oscar geht einkaufen in einen großen Supermarkt. Seine Einkaufsliste ist lang,
        er kauft für das ganze Wochenende ein. Außerdem kommen Gäste, für die er kochen wird.
        Beim Obstregal kauft er verschiedene Früchte: Äpfel, Bananen,
        Erdbeeren und Kirschen wird er für den Nachtisch verwenden, es gibt Obstsalat.
        Die Trauben verwendet er für die Vorspeise. Er möchte gerne kleine Spieße mit Käse und Trauben anbieten.
      `,
      bulg: 'Bulgarian',
    },
    date: 1628842977,
    isActive: false,
  },
];

export type Languages = 'en' | 'germ' | 'bulg';
