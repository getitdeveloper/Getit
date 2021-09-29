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
} from '../reducers/actions';
import { PostData } from './postTypes';

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

// 모집 게시판 게시글 상세내용
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

function* postSaga() {
  yield all([
    fork(watchRequestCommonPost),
    fork(watchRequestCommonPostRegister),
    fork(watchRequestCommonPostLike),
    fork(watchRequestRecruitPost),
  ]);
}

export default postSaga;
