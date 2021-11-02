import axios from 'axios';

import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
import {
  COMMON_POST_SUCCESS,
  COMMON_POST_FAILURE,
  COMMON_POST_REQUEST,
  COMMON_POST_REGISTER_REQUEST,
  COMMON_POST_REGISTER_FAILURE,
  COMMON_POST_REGISTER_SUCCESS,
  COMMON_POST_LIKE_REQUEST,
  COMMON_POST_LIKE_SUCCESS,
  COMMON_POST_LIKE_FAILURE,
  RECRUIT_POST_REQUEST,
  RECRUIT_POST_SUCCESS,
  RECRUIT_POST_FAILURE,
  RECRUIT_POSTING_REQUEST,
  RECRUIT_POSTING_SUCCESS,
  RECRUIT_POSTING_FAILURE,
  TEAM_PROFILE_REGISTER_REQUEST,
  TEAM_PROFILE_REGISTER_SUCCESS,
  TEAM_PROFILE_REGISTER_FAILURE,
  TEAM_PROFILE_REMOVE_REQUEST,
  TEAM_PROFILE_REMOVE_SUCCESS,
  TEAM_PROFILE_REMOVE_FAILURE,
} from '../reducers/actions';
import {
  PostData,
  TeamProfileData,
  TeamProfileApiData,
  PostingData,
  ITeamProfileRemove,
  ITeamProfileRemoveApiData,
} from './postTypes';

// 자유/질문 게시글 받아오기
const requestCommonPost = (id: string) => {
  return axios.get(`/api/board/${id}`);
};

function* requestCommonPostSaga(action: any): any {
  try {
    const response = yield call(requestCommonPost, action.data.id);
    console.log('자유/질문 게시글 정보 응답 ===>', response);

    yield put({
      type: COMMON_POST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: COMMON_POST_FAILURE,
      error,
    });
  }
}

// 자유/질문 게시글 작성하기
const requestCommonPostRegister = (data: PostData) => {
  return axios.post(`/api/board/`, data);
};

function* requestCommonPostRegisterSaga(action: any): any {
  try {
    const response = yield call(requestCommonPostRegister, action.data);
    console.log('자유/질문 게시글 작성 후 정보 응답 ===>', response);

    yield put({
      type: COMMON_POST_REGISTER_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: COMMON_POST_REGISTER_FAILURE,
      error,
    });
  }
}

// 자유/질문 게시글 좋아요 누르기
const requestCommonPostLike = (data: any) => {
  return axios.post(`/api/${data.board}/commonlikes/`, data.likes);
};

function* requestCommonPostLikeSaga(action: any): any {
  try {
    const response = yield call(requestCommonPostLike, action.data);
    console.log('자유/질문 게시글 좋아요 생성 후 정보 응답 ===>', response);

    yield put({
      type: COMMON_POST_LIKE_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: COMMON_POST_LIKE_FAILURE,
      error,
    });
  }
}

// 모집 게시판 게시글 상세내용 가져오기
const requestRecruitPost = (data: string) => {
  return axios.get(`/api/recruitmentboard/${data}`);
};

function* requestRecruitPostSaga(action: { type: string; data: string }): any {
  try {
    const response = yield call(requestRecruitPost, action.data);
    console.log('모집 게시판 게시글 상세내용 응답 ===>', response);

    yield put({
      type: RECRUIT_POST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error('모집 게시판 게시글 상세내용 응답 ===>', error);
    yield put({
      type: RECRUIT_POST_FAILURE,
      error,
    });
  }
}

// 스터디 모집 게시글 등록
const requestRecruitPosting = (data: PostingData) => {
  return axios.post(`/api/recruitmentboard/`, data);
};

function* requestRecruitPostingSaga(action: {
  type: string;
  data: PostingData;
  history: any;
}): any {
  try {
    const response = yield call(requestRecruitPosting, action.data);

    yield put({
      type: RECRUIT_POSTING_SUCCESS,
      data: response.data,
    });
    alert('스터디 모집 게시글 작성 완료');
    action.history.push('/');
  } catch (error) {
    yield put({
      type: RECRUIT_POSTING_FAILURE,
      error,
    });
    alert('스터디 모집 게시글 작성 오류. 잠시 후 다시 시도해 주세요.');
  }
}

// 팀 프로필 생성
const requestTeamProfilePostRegister = (data: TeamProfileApiData) => {
  return axios.post(`/api/${data.userId}/teamprofile/`, data.formData);
};

function* requestTeamProfilePostRegisterSaga(action: TeamProfileData): any {
  try {
    const response = yield call(requestTeamProfilePostRegister, {
      formData: action.data,
      userId: action.userId,
    });
    yield put({
      type: TEAM_PROFILE_REGISTER_SUCCESS,
      data: response.data,
    });
    alert('팀 프로필 생성 완료');
    action.history.push('/myprofile');
  } catch (error) {
    yield put({
      type: TEAM_PROFILE_REGISTER_FAILURE,
      error,
    });
    alert('팀 프로필 생성 오류. 잠시 후 다시 시도해 주세요.');
  }
}

// 팀 프로필 삭제
const requestTeamProfilePostRemove = (data: ITeamProfileRemoveApiData) => {
  return axios.delete(`/api/${data.userId}/teamprofile/${data.postId}`);
};

function* requestTeamProfilePostRemoveSaga(action: ITeamProfileRemove): any {
  try {
    const response = yield call(requestTeamProfilePostRemove, action.data);
    yield put({
      type: TEAM_PROFILE_REMOVE_SUCCESS,
      data: response.data,
    });
    alert('팀 프로필 삭제 완료');
    action.history.push('/myprofile');
  } catch (error) {
    yield put({
      type: TEAM_PROFILE_REMOVE_FAILURE,
      error,
    });
    alert('팀 프로필 삭제 오류. 잠시 후 다시 시도해 주세요.');
  }
}

function* watchRequestCommonPost() {
  yield takeLatest(COMMON_POST_REQUEST, requestCommonPostSaga);
}

function* watchRequestCommonPostRegister() {
  yield takeLatest(COMMON_POST_REGISTER_REQUEST, requestCommonPostRegisterSaga);
}

function* watchRequestCommonPostLike() {
  yield takeLatest(COMMON_POST_LIKE_REQUEST, requestCommonPostLikeSaga);
}

function* watchRequestRecruitPost() {
  yield takeLatest(RECRUIT_POST_REQUEST, requestRecruitPostSaga);
}

function* watchRequestRecruitPosting() {
  yield takeLatest(RECRUIT_POSTING_REQUEST, requestRecruitPostingSaga);
}

function* watchRequestTeamProfilePostRegister() {
  yield takeLatest(
    TEAM_PROFILE_REGISTER_REQUEST,
    requestTeamProfilePostRegisterSaga,
  );
}

function* watchRequestTeamProfilePostRemove() {
  yield takeLatest(
    TEAM_PROFILE_REMOVE_REQUEST,
    requestTeamProfilePostRemoveSaga,
  );
}

function* postSaga() {
  yield all([
    fork(watchRequestCommonPost),
    fork(watchRequestCommonPostRegister),
    fork(watchRequestCommonPostLike),
    fork(watchRequestRecruitPost),
    fork(watchRequestRecruitPosting),
    fork(watchRequestTeamProfilePostRegister),
    fork(watchRequestTeamProfilePostRemove),
  ]);
}

export default postSaga;
