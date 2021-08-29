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
} from './actions';

// 초기 상태값 타입
export interface InitialState {
  user: {
    user_pk?: number;
    user?: number;
    nickname?: string;
    job?: string;
    developer_level?: string;
    img?: string;
    email?: string;
    info?: string;
    git?: string;
    stacks?: number[];
    portfolio?: object[];
  } | null;
  userInfoRequest: boolean;
  userInfoSuccess: boolean;
  userInfoFailure: string | null;
  userLogInRequest: boolean;
  userLogInSuccess: boolean;
  userLogInFailure: string | null;
  userLogOutRequest: boolean;
  userLogOutSuccess: boolean;
  userLogOutFailure: string | null;
}

// 사용자 정보 타입
export interface UserInfoRequest {
  type: typeof USER_INFO_REQUEST;
}

export interface UserInfoSuccess {
  type: typeof USER_INFO_SUCCESS;
  data: {
    user: number;
    user_pk: number;
    nickname: string;
    job: string;
    developer_level: string;
    img: string;
    email: string;
    info: string;
    git: string;
    stacks: number[];
    portfolio: object[];
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
}

export interface UserLogOutFailure {
  type: typeof USER_LOGOUT_FAILURE;
  error: string;
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
  | UserLogOutFailure;

// export type UserInfoActions =
//   | UserInfoRequest
//   | UserInfoSuccess
//   | UserInfoFailure;

// export type UserLogInActions =
//   | UserLogInRequest
//   | UserLogInSuccess
//   | UserLogInFailure;

// export type UserLogOutActions =
//   | UserLogOutRequest
//   | UserLogOutSuccess
//   | UserLogOutFailure;
