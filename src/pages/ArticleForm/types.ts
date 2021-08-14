import { Languages } from '../../utils/utils';

export interface ArticleFormParams {
  id?: string;
  lang: Languages;
}

export interface InputValues {
  [Languages.english]: string;
  [Languages.germany]: string;
  [Languages.bulgarian]: string;
}

export interface FormProps {
  isEdit?: boolean;
  articleTitle: InputValues;
  content: InputValues;
  isActive: boolean;
  date: Date;
  handleTitleChange: (value: string) => void;
  handleContentChange: (value: string) => void;
  handleDateChange: (value: Date) => void;
  handleCheckboxChange: (value: boolean) => void;
}
