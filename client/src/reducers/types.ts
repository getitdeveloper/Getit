import { IPortfolio, IProfileInfo } from '../types';
import {
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_PROFILE_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_NICK_DOUBLECHECK_REQUEST,
  USER_NICK_DOUBLECHECK_SUCCESS,
  USER_NICK_DOUBLECHECK_FAILURE,
  USER_NICK_DOUBLECHECK_RESET,
} from './actions';

// 초기 상태값 타입
export interface InitialState {
  id: {
    message: string | null;
    user_pk: number | null;
  };
  nickDoubleCheck: {
    duplicate: null | string;
  };
  profileInfo: IProfileInfo | null;
  portfolio: IPortfolio | null;
  userInfoRequest: boolean;
  userInfoSuccess: boolean;
  userInfoFailure: string | null;
  userLogInRequest: boolean;
  userLogInSuccess: boolean;
  userLogInFailure: string | null;
  userLogOutRequest: boolean;
  userLogOutSuccess: boolean;
  userLogOutFailure: string | null;
  userProfileRequest: boolean;
  userProfileSuccess: boolean;
  userProfileFailure: string | null;
  userNickDoubleCheckRequest: boolean;
  userNickDoubleCheckSuccess: boolean;
  userNickDoubleCheckFailure: string | null;
  userNickDoubleCheckReset: boolean;
}

// 사용자 정보 타입
export interface UserInfoRequest {
  type: typeof USER_INFO_REQUEST;
}

export interface UserInfoSuccess {
  type: typeof USER_INFO_SUCCESS;
  data: {
    message: string;
    user_pk: number;
  };
}

export interface UserInfoFailure {
  type: typeof USER_INFO_FAILURE;
  error: string;
}

// 로그인 액션 타입
export interface UserLogInRequest {
  type: typeof USER_LOGIN_REQUEST;
}

export interface UserLogInSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  data: {
    message: string;
    user_pk: number;
  };
}

export interface UserLogInFailure {
  type: typeof USER_LOGIN_FAILURE;
  error: string;
}

// 로그아웃 액션 타입
export interface UserLogOutRequest {
  type: typeof USER_LOGOUT_REQUEST;
}

export interface UserLogOutSuccess {
  type: typeof USER_LOGOUT_SUCCESS;
  data: {
    message: string;
    user_pk: number;
  };
}

export interface UserLogOutFailure {
  type: typeof USER_LOGOUT_FAILURE;
  error: string;
}

export interface UserProfileRequest {
  type: typeof USER_PROFILE_REQUEST;
}

export interface UserProfileSuccess {
  type: typeof USER_PROFILE_SUCCESS;
  data: {
    profile: IProfileInfo;
    portfolio: IPortfolio[];
  };
}

export interface UserProfileFailure {
  type: typeof USER_PROFILE_FAILURE;
  error: string;
}

export interface IUserNickDoubleCheckRequest {
  type: typeof USER_NICK_DOUBLECHECK_REQUEST;
}

export interface IUserNickDoubleCheckSuccess {
  type: typeof USER_NICK_DOUBLECHECK_SUCCESS;
  data: {
    duplicate: string;
  };
}

export interface IUserNickDoubleCheckFailure {
  type: typeof USER_NICK_DOUBLECHECK_FAILURE;
  error: string;
}

export interface IUserNickDoubleCheckReset {
  type: typeof USER_NICK_DOUBLECHECK_RESET;
}

export type UserActions =
  | UserInfoRequest
  | UserInfoSuccess
  | UserInfoFailure
  | UserLogInRequest
  | UserLogInSuccess
  | UserLogInFailure
  | UserLogOutRequest
  | UserLogOutSuccess
  | UserLogOutFailure
  | UserProfileRequest
  | UserProfileSuccess
  | UserProfileFailure
  | IUserNickDoubleCheckRequest
  | IUserNickDoubleCheckSuccess
  | IUserNickDoubleCheckFailure
  | IUserNickDoubleCheckReset;
