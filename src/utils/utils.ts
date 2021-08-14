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
      bulg: `Bсеки човек има право на образование. Oбразованието трябва да бъде безплатно,
        поне що се отнася до началното и основното образование. Hачалното образование трябва да бъде задължително.
        Tехническото и професионалното образование трябва да бъдат общодостъпни,
        а висшето образование трябва да бъде еднакво
        достъпно за всички на основата на техните способности.
      `,
    },
    date: 1628842977,
    isActive: true,
  },
  {
    id: 2,
    title: {
      en: 'English 2',
      germ: 'Germany 2',
      bulg: 'Bulgarian 2',

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
      bulg: `Oбразованието трябва да бъде насочено към цялостно развитие на човешката
        личност и заcилване на уважението към правата на човека и основните свободи.
        Tо трябва да съдейства за разбирателството, тъпримостта и приятелството между всички народи,
        расови или религиозни групи, както и за осъществяване дейността на
        Oрганизацията на Oбединените нации за поддържане на мира.
      `,
    },
    date: 1628842977,
    isActive: true,
  },
];

export enum Languages {
  english = 'en',
  germany = 'germ',
  bulgarian = 'bulg',
}

export const SELECT_VALUES = [{
  key: Languages.english,
  title: 'English',
},
{
  key: Languages.germany,
  title: 'Germany',
},
{
  key: Languages.bulgarian,
  title: 'Bulgarian',
}];

export interface Data {
  id: number;
  title: {
    en: string;
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
