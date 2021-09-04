import axios from 'axios';
import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
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
  USER_PROFILE_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_NICK_DOUBLECHECK_REQUEST,
  USER_NICK_DOUBLECHECK_SUCCESS,
  USER_NICK_DOUBLECHECK_FAILURE,
} from '../reducers/actions';
import {
  ResponseUserProfile,
  ResponseUserInfo,
  GoogleAccessData,
  KakaoAccessData,
  GithubAccessData,
  IUserNickDoubleCheckRequest,
  IUserNickDoubleCheckResponse,
  IUserNickname,
} from './types';

// 사용자 정보 요청
const requestUserInfo = (user_pk: string) => {
  return axios.get(`/api/profile/${user_pk}/`);
};

// ? axios.get('/profile/') --> back accesstoken 확인해서 자기 자신 정보 찾아서 뿌려주기?

function* requestUserInfoSaga(action: any): any {
  try {
    const response = yield call(requestUserInfo, action.data.user_pk);
    console.log('유저 정보 응답 ===>', response);

    yield put({
      type: USER_INFO_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: USER_INFO_FAILURE,
      error,
    });
  }
}

// 사용자 프로필 정보 요청
const requestUserProfile = (user_pk: string) => {
  return axios.get(`/api/profile/${user_pk}/`);
};

function* requestUserProfileSaga(action: any): any {
  try {
    const response = yield call(requestUserProfile, action.data.user_pk);
    console.log('프로필 정보 응답 ===>', response);

    yield put({
      type: USER_PROFILE_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: USER_PROFILE_FAILURE,
      error,
    });
  }
}

// 로그인 요청
// 구글 테스트 로그인
const requestTestGoogleLogIn = (accessData: GoogleAccessData) => {
  console.log('데이터 전송 ===> ', accessData);
  return axios.post('/api/login/google/', accessData);
};

// 카카오 테스트 로그인
const requestTestKakaoLogIn = (accessData: KakaoAccessData) => {
  console.log('데이터 전송 ===> ', accessData);
  return axios.post('/api/login/kakao/', accessData);
};

// 깃허브 테스트 로그인
const requestTestGithubLogIn = (accessData: GithubAccessData) => {
  console.log('데이터 전송 ===> ', accessData);
  return axios.post('/api/login/github/', accessData);
};

function* requestUserLogInSaga(action: any) {
  try {
    console.log('saga action ===> ', action.data);

    const loginSocialType = action.data.social;

    let response: ResponseUserInfo;

    switch (loginSocialType) {
      case 'google':
        response = yield call(requestTestGoogleLogIn, action.data);
        break;
      case 'kakao':
        response = yield call(requestTestKakaoLogIn, action.data);
        break;
      case 'github':
        response = yield call(requestTestGithubLogIn, action.data);
        break;
      default:
        return null;
    }

    console.log('로그인 요청 응답 성공 ===>', response.data);

    yield put({
      type: USER_LOGIN_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: USER_LOGIN_FAILURE,
      error,
    });
  }
}

// 로그아웃 요청
const requestUserLogOut = () => {
  return axios.post('/api/user/logout');
};

function* requestUserLogOutSaga(): any {
  try {
    const response = yield call(requestUserLogOut);
    // console.log('로그아웃 요청 응답 ===>', response);

    yield put({
      type: USER_LOGOUT_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    // console.log('에러 ===>', error);
    yield put({
      type: USER_LOGOUT_FAILURE,
      error,
    });
  }
}

// 회원가입 페이지 닉네임 중복 체크
const requestUserNickDoubleCheck = (data: IUserNickname) => {
  console.log('닉네임 중복 확인 ===>', data);
  return axios.post('/api/duplicate_check/', data);
};

function* requestUserNickDoubleCheckSaga(
  action: IUserNickDoubleCheckRequest,
): any {
  try {
    const response: IUserNickDoubleCheckResponse = yield call(
      requestUserNickDoubleCheck,
      action.data,
    );
    console.log('닉네임 중복 확인 응답 결과 ===>', response);

    yield put({
      type: USER_NICK_DOUBLECHECK_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    // console.log('에러 ===>', error);
    yield put({
      type: USER_NICK_DOUBLECHECK_FAILURE,
      error,
    });
  }
}

function* watchRequestUserInfo() {
  yield takeLatest(USER_INFO_REQUEST, requestUserInfoSaga);
}

function* watchRequestUserLogIn() {
  yield takeLatest(USER_LOGIN_REQUEST, requestUserLogInSaga);
}

function* watchRequestUserLogOut() {
  yield takeLatest(USER_LOGOUT_REQUEST, requestUserLogOutSaga);
}

function* watchRequestUserProfile() {
  yield takeLatest(USER_PROFILE_REQUEST, requestUserProfileSaga);
}

function* watchRequestUserNickDoubleCheck() {
  yield takeLatest(
    USER_NICK_DOUBLECHECK_REQUEST,
    requestUserNickDoubleCheckSaga,
  );
}

function* userSaga() {
  yield all([
    fork(watchRequestUserInfo),
    fork(watchRequestUserLogIn),
    fork(watchRequestUserLogOut),
    fork(watchRequestUserProfile),
    fork(watchRequestUserNickDoubleCheck),
  ]);
}

export default userSaga;
