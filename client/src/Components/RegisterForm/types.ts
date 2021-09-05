export interface IRegisterData {
  user: number;
  user_pk: number;
  nickname: string;
  job: string;
  level: string;
  email: string;
  info: string;
  stacks?: Array<string>; // string[]
}
