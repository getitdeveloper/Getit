import axios from 'axios';
import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
import {
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
  USER_PROFILE_REGISTER_REQUEST,
  USER_PROFILE_REGISTER_SUCCESS,
  USER_PROFILE_REGISTER_FAILURE,
  USER_PROFILE_EDIT_REQUEST,
  USER_PROFILE_EDIT_SUCCESS,
  USER_PROFILE_EDIT_FAILURE,
  USER_ID_UPDATE,
  PORTFOLIO_LIST_REQUEST,
  PORTFOLIO_LIST_SUCCESS,
  PORTFOLIO_LIST_FAILURE,
  PORTFOLIO_REGISTER_REQUEST,
  PORTFOLIO_REGISTER_SUCCESS,
  PORTFOLIO_REGISTER_FAILURE,
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
  IUserProfileRegisterResponse,
  IUserProfileRegisterRequest,
  IUserProfileData,
} from './userTypes';

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

// 사용자 프로필 수정
const requestUserProfileEdit = (data: any) => {
  return axios.put(`/api/profile/${data.user_pk}/`, data.updatedProfile);
};

function* requestUserProfileEditSaga(action: any): any {
  try {
    const response = yield call(requestUserProfileEdit, action.data);
    console.log('프로필 정보 수정 후 응답 ===>', response);

    yield put({
      type: USER_PROFILE_EDIT_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: USER_PROFILE_EDIT_FAILURE,
      error,
    });
  }
}

// 로그인 요청
// 구글 테스트 로그인
const requestGoogleLogIn = (accessData: GoogleAccessData) => {
  console.log('데이터 전송 ===> ', accessData);
  return axios.post('/api/login/google/', accessData);
};

// 카카오 테스트 로그인
const requestKakaoLogIn = (accessData: KakaoAccessData) => {
  console.log('데이터 전송 ===> ', accessData);
  return axios.post('/api/login/kakao/', accessData);
};

// 깃허브 테스트 로그인
const requestGithubLogIn = (accessData: GithubAccessData) => {
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
        response = yield call(requestGoogleLogIn, action.data);
        break;
      case 'kakao':
        response = yield call(requestKakaoLogIn, action.data);
        break;
      case 'github':
        response = yield call(requestGithubLogIn, action.data);
        break;
      default:
        return null;
    }

    console.log('로그인 요청 응답 성공 ===>', response.data);

    //! 로컬 테스트용
    // const accessToken = response.data.access_token;
    // axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

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
  return axios.get('/api/logout/');
};

function* requestUserLogOutSaga(): any {
  try {
    const response = yield call(requestUserLogOut);
    console.log('로그아웃 요청 응답 ===>', response);

    yield put({
      type: USER_LOGOUT_SUCCESS,
      // data: response.data,
    });
  } catch (error) {
    console.log('로그아웃 요청 에러 ===>', error);
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

// 회원가입 회원 프로필 정보 저장
const requestUserProfileRegister = (data: IUserProfileData) => {
  console.log('프로필 정보 확인 data ===>', data);
  return axios.post(`/api/profile/${data.user_pk}/`, data);
};

function* requestUserProfileRegisterSaga(action: IUserProfileRegisterRequest) {
  console.log('프로필 정보 확인 action ===>', action);

  try {
    const response: IUserProfileRegisterResponse = yield call(
      requestUserProfileRegister,
      action.data,
    );
    console.log('프로필 저장 응답 결과 ===>', response);

    yield put({
      type: USER_PROFILE_REGISTER_SUCCESS,
      data: response.data,
    });

    // 회원가입에 성공했기때문에 message, user_pk 업데이트
    yield put({
      type: USER_ID_UPDATE,
      data: {
        message: 'login',
        user_pk: response.data.user_pk,
      },
    });

    return alert(
      `${response.data.nickname}님 회원가입이 완료되었습니다. 환영합니다.`,
    );
  } catch (error) {
    // console.log('에러 ===>', error);
    yield put({
      type: USER_PROFILE_REGISTER_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 포트폴리오 리스트 받아오기
const requestPortfolioList = (user_pk: number) => {
  return axios.get(`/api/${user_pk}/portfolio/`);
};

function* requestPortfolioListSaga(action: any): any {
  try {
    const response = yield call(requestPortfolioList, action.data.user_pk);
    console.log('포트폴리오 리스트 요청 응답 ===>', response);

    yield put({
      type: PORTFOLIO_LIST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.log('포트폴리오 리스트 요청 에러 ===>', error);
    yield put({
      type: PORTFOLIO_LIST_FAILURE,
      error,
    });
  }
}

// 포트폴리오 생성하기
const requestPortfolioRegister = (data: any) => {
  return axios.post(`/api/${data.user_pk}/portfolio/`, data.portfolio);
};

function* requestPortfolioRegisterSaga(action: any): any {
  try {
    const response = yield call(requestPortfolioRegister, action.data);
    console.log('포트폴리오 생성 후 요청 응답 ===>', response);

    yield put({
      type: PORTFOLIO_REGISTER_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.log('포트폴리오 생성 요청 에러 ===>', error);
    yield put({
      type: PORTFOLIO_REGISTER_FAILURE,
      error,
    });
  }
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

function* watchRequestUserProfileEdit() {
  yield takeLatest(USER_PROFILE_EDIT_REQUEST, requestUserProfileEditSaga);
}

function* watchRequestUserNickDoubleCheck() {
  yield takeLatest(
    USER_NICK_DOUBLECHECK_REQUEST,
    requestUserNickDoubleCheckSaga,
  );
}

function* watchRequestUserPofileRegister() {
  yield takeLatest(
    USER_PROFILE_REGISTER_REQUEST,
    requestUserProfileRegisterSaga,
  );
}

function* watchRequestPortfolioList() {
  yield takeLatest(PORTFOLIO_LIST_REQUEST, requestPortfolioListSaga);
}

function* watchRequestPortfolioRegister() {
  yield takeLatest(PORTFOLIO_REGISTER_REQUEST, requestPortfolioRegisterSaga);
}

function* userSaga() {
  yield all([
    fork(watchRequestUserLogIn),
    fork(watchRequestUserLogOut),
    fork(watchRequestUserProfile),
    fork(watchRequestUserProfileEdit),
    fork(watchRequestUserNickDoubleCheck),
    fork(watchRequestUserPofileRegister),
    fork(watchRequestPortfolioList),
    fork(watchRequestPortfolioRegister),
  ]);
}

export default userSaga;
