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
