import { IUpdatedProfileInfo } from '@types';
import { RouteComponentProps } from 'react-router-dom';
import { IPortfolio, IProfileInfo } from '../types';

export interface ResponseUserInfo {
  data: {
    message: string;
    // ! 로컬 테스트용
    access_token: string;
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

export interface IUserProfileRegisterData {
  user: number;
  user_pk: number;
  nickname: string;
  job: string;
  level: string;
  email: string;
  info: string;
  git?: string;
  stack: Array<string>; // string[]
}

export interface IUserProfileRegisterRequest {
  type: string;
  data: {
    user: number;
    user_pk: number;
    nickname: string;
    job: string;
    level: string;
    email: string;
    info: string;
    git?: string;
    stack: Array<string>; // string[]
  };
}

export interface IUserProfileRegisterResponse {
  data: {
    user: number;
    user_pk: number;
    nickname: string;
    job: string;
    level: string;
    image: string;
    email: string;
    info: string;
    git?: string;
    stack: Array<string>; // string[]
  };
}


export interface IUserProfileData {
  user_pk: number;
}

export interface IUserProfile {
  type: string;
  data: IUserProfileData;
}

export interface IUserProfileEditData {
  updatedProfile: IUpdatedProfileInfo;
  user_pk: string;
}

export interface IUserProfileEdit {
  type: string;
  data: IUserProfileEditData;
}

export interface IUserLogout {
  type: string;
  history: RouteComponentProps['history'];
}
