export interface IProfileInfo {
  user: number;
  user_pk: number;
  job: string;
  developer_level: string;
  designer_and_pm_level: string;
  image: string | null;
  email: string;
  info: string | null;
  git: string | null;
  stacks: string[];
}

export interface IPortfolio {
  id: number;
  title: string;
  contents: string;
}
