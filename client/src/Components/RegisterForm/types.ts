export interface IRegisterData {
  user: number;
  user_pk: number;
  nickname: string;
  job: string;
  level: string;
  email: string;
  info: string;
  stack: Array<string>; // string[]
}

export interface IOptionProps {
  field: string;
  image: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
