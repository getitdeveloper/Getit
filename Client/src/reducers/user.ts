import produce from 'immer';
import { InitialState, UserActions } from './types';

// 초기 상태
const initialState: InitialState = {
  user: null,
  userInfoRequest: false,
  userInfoSuccess: false,
  userInfoFailure: null,
  userLogInRequest: false,
  userLogInSuccess: false,
  userLogInFailure: null,
  userLogOutRequest: false,
  userLogOutSuccess: false,
  userLogOutFailure: null,
};

// 사용자 정보
export const USER_INFO_REQUEST = 'USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS';
export const USER_INFO_FAILURE = 'USER_INFO_FAILURE';

// 로그인
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

// 로그아웃
export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

const reducer = (state = initialState, action: UserActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case USER_INFO_REQUEST:
        draft.userInfoRequest = true;
        draft.userInfoSuccess = false;
        draft.userInfoFailure = null;
        break;
      case USER_INFO_SUCCESS:
        draft.userInfoRequest = false;
        draft.userInfoSuccess = true;
        draft.userInfoFailure = null;
        draft.user = action.data;
        break;
      case USER_INFO_FAILURE:
        draft.userInfoRequest = false;
        draft.userInfoSuccess = false;
        draft.userInfoFailure = action.error;
        break;
      case USER_LOGIN_REQUEST:
        draft.userLogInRequest = true;
        draft.userLogInSuccess = false;
        draft.userLogInFailure = null;
        break;
      case USER_LOGIN_SUCCESS:
        draft.userLogOutRequest = false;
        draft.userLogOutSuccess = true;
        draft.userLogOutFailure = null;
        draft.user = action.data;
        break;
      case USER_LOGIN_FAILURE:
        draft.userLogOutRequest = false;
        draft.userLogOutSuccess = false;
        draft.userLogOutFailure = action.error;
        break;
      case USER_LOGOUT_REQUEST:
        draft.userLogOutRequest = true;
        draft.userLogOutSuccess = false;
        draft.userLogOutFailure = null;
        break;
      case USER_LOGOUT_SUCCESS:
        draft.userLogOutRequest = false;
        draft.userLogOutSuccess = true;
        draft.userLogOutFailure = null;
        draft.user = null;
        break;
      case USER_LOGOUT_FAILURE:
        draft.userLogOutRequest = false;
        draft.userLogOutSuccess = false;
        draft.userLogOutFailure = action.error;
        break;

      default:
        return state;
    }
  });

export default reducer;
