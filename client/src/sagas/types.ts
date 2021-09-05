import { IPortfolio, IProfileInfo } from '../types';

export interface ResponseUserInfo {
  data: {
    message: string;
    user_pk: number;
  };
}

export interface ResponseUserProfile {
  data: {
    profile: IProfileInfo;
    portfolio: IPortfolio;
  };
}

export interface GoogleAccessData {
  social: string;
  access_token: string;
}

export interface KakaoAccessData {
  social: string;
  API_KEY: string;
  REDIRECT_URI: string;
  code: string;
}

export interface GithubAccessData {
  social: string;
  client_id: string;
  client_secret: string;
  code: string;
}

export interface IUserNickname {
  nickname: string;
}
export interface IUserNickDoubleCheckRequest {
  type: string;
  data: {
    nickname: string;
  };
}
export interface IUserNickDoubleCheckResponse {
  data: { duplicate: string };
}

// export interface IUserProfile {
//   user_id: number;
//   nickname: string;
//   field: string;
//   level: string;
//   email: string;
//   introduce: string;
//   stacks: Array<string>; // string[]
// }

// export interface IUserProfileRegisterRequest {
//   type: string;
//   data: {
//     user_pk: number;
//     nickname: string;
//     field: string;
//     level: string;
//     email: string;
//     introduce: string;
//     stacks: Array<string>; // string[]
//   };
// }

// export interface IUserProfileRegisterResponse {
//   data: {
//     user: number;
//     user_id: number;
//     nickname: string;
//     job: string;
//     developer_level: string;
//     designer_and_pm_level: string;
//     image: string;
//     email: string;
//     info: string;
//     git: string;
//   };
// }
