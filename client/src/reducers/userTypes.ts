import { IPortfolio, IProfileInfo } from '../types';
import {
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
  USER_PROFILE_REGISTER_REQUEST,
  USER_PROFILE_REGISTER_SUCCESS,
  USER_PROFILE_REGISTER_FAILURE,
  USER_PROFILE_EDIT_REQUEST,
  USER_PROFILE_EDIT_SUCCESS,
  USER_PROFILE_EDIT_FAILURE,
  USER_REGISTER_RESET,
  USER_ID_UPDATE,
  PORTFOLIO_LIST_REQUEST,
  PORTFOLIO_LIST_SUCCESS,
  PORTFOLIO_LIST_FAILURE,
  PORTFOLIO_REGISTER_REQUEST,
  PORTFOLIO_REGISTER_SUCCESS,
  PORTFOLIO_REGISTER_FAILURE,
} from './actions';

// 초기 상태값 타입
export interface InitialState {
  id: {
    message: string | null;
    // !로컬 테스트용
    user_pk: number | null;
  };
  nickDoubleCheck: {
    duplicate: null | string;
  };
  profileInfo: IProfileInfo | null;
  portfolio: IPortfolio | null;
  portfolioList: IPortfolio[] | null;
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
  userProfileRegisterRequest: boolean;
  userProfileRegisterSuccess: boolean;
  userProfileRegisterFailure: string | null;
  userProfileEditRequest: boolean;
  userProfileEditSuccess: boolean;
  userProfileEditFailure: string | null;
  userRegisterReset: boolean;
  userIdUpdate: boolean;
  portfolioListRequest: boolean;
  portfolioListSuccess: boolean;
  portfolioListFailure: string | null;
  portfolioRegisterRequest: boolean;
  portfolioRegisterSuccess: boolean;
  portfolioRegisterFailure: string | null;
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
    nickname: string;
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
    nickname: string;
  };
}

export interface UserLogOutFailure {
  type: typeof USER_LOGOUT_FAILURE;
  error: string;
}

// 사용자 프로필 정보 타입
export interface UserProfileRequest {
  type: typeof USER_PROFILE_REQUEST;
}

export interface UserProfileSuccess {
  type: typeof USER_PROFILE_SUCCESS;
  data: IProfileInfo;
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

export interface IUserProfileRegisterRequest {
  type: typeof USER_PROFILE_REGISTER_REQUEST;
}

export interface IUserProfileRegisterSuccess {
  type: typeof USER_PROFILE_REGISTER_SUCCESS;
  data: IProfileInfo;
}

export interface IUserProfileRegisterFailure {
  type: typeof USER_PROFILE_REGISTER_FAILURE;
  error: string;
}

export interface UserProfileEditRequest {
  type: typeof USER_PROFILE_EDIT_REQUEST;
}

export interface UserProfileEditSuccess {
  type: typeof USER_PROFILE_EDIT_SUCCESS;
  data: IProfileInfo;
}

export interface UserProfileEditFailure {
  type: typeof USER_PROFILE_EDIT_FAILURE;
  error: string;
}

export interface IUserRegisterReset {
  type: typeof USER_REGISTER_RESET;
}

export interface IUserIdUpdate {
  type: typeof USER_ID_UPDATE;
  data: {
    message: string;
    user_pk: number;
    nickname: string;
  };
}

// 포트폴리오 리스트 받아오기
export interface PortfolioListRequest {
  type: typeof PORTFOLIO_LIST_REQUEST;
}

export interface PortfolioListSuccess {
  type: typeof PORTFOLIO_LIST_SUCCESS;
  data: IPortfolio[];
}

export interface PortfolioListFailure {
  type: typeof PORTFOLIO_LIST_FAILURE;
  error: string;
}

// 포트폴리오 생성하기
export interface PortfolioRegisterRequest {
  type: typeof PORTFOLIO_REGISTER_REQUEST;
}

export interface PortfolioRegisterSuccess {
  type: typeof PORTFOLIO_REGISTER_SUCCESS;
  data: IPortfolio;
}

export interface PortfolioRegisterFailure {
  type: typeof PORTFOLIO_REGISTER_FAILURE;
  error: string;
}

export type UserActions =
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
  | IUserNickDoubleCheckReset
  | IUserProfileRegisterRequest
  | IUserProfileRegisterSuccess
  | IUserProfileRegisterFailure
  | UserProfileEditRequest
  | UserProfileEditSuccess
  | UserProfileEditFailure
  | IUserRegisterReset
  | IUserIdUpdate
  | PortfolioListRequest
  | PortfolioListSuccess
  | PortfolioListFailure
  | PortfolioRegisterRequest
  | PortfolioRegisterSuccess
  | PortfolioRegisterFailure;
