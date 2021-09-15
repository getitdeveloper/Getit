import axios from 'axios';
import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
import {
  COMMON_BOARD_SUCCESS,
  COMMON_BOARD_FAILURE,
  COMMON_BOARD_REQUEST,
  COMMON_POST_SUCCESS,
  COMMON_POST_FAILURE,
  COMMON_POST_REQUEST,
  COMMON_POST_REGISTER_REQUEST,
  COMMON_POST_REGISTER_FAILURE,
  COMMON_POST_REGISTER_SUCCESS,
  MY_POST_LIST_SUCCESS,
  MY_POST_LIST_REQUEST,
  MY_POST_LIST_FAILURE,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
  SEARCH_POST_FAILURE,
} from '../reducers/actions';
import { BoardData, PostData } from './boardTypes';

// 자유/질문 게시판 받아오기
const requestCommonBoard = (data: BoardData) => {
  // return axios.get(`/api/board?category=${data.category}`);
  return axios.get(`/api/board?category=${data.category}&page=${data.page}`);
};

function* requestCommonBoardSaga(action: any): any {
  try {
    const response = yield call(requestCommonBoard, action.data);
    console.log('게시판 정보 응답 ===>', response);

    yield put({
      type: COMMON_BOARD_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: COMMON_BOARD_FAILURE,
      error,
    });
  }
}

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

// 내가 쓴 게시글 받아오기
const requestMyPostList = (data: any) => {
  return axios.get(`/api/mycommonboard/${data.user}`);
};

function* requestMyPostListSaga(action: any): any {
  try {
    const response = yield call(requestMyPostList, action.data);
    console.log('내가 쓴 게시글 정보 응답 ===>', response);

    yield put({
      type: MY_POST_LIST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: MY_POST_LIST_FAILURE,
      error,
    });
  }
}

// 게시글 검색
const requestSearchPost = (data: string) => {
  return axios.get(`/api/wholepost/?search=${data}`);
};

function* requestSearchPostSaga(action: { type: string; data: string }): any {
  try {
    const response = yield call(requestSearchPost, action.data);
    console.log('게시글 전체 검색 응답 ===>', response);

    yield put({
      type: SEARCH_POST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: SEARCH_POST_FAILURE,
      error,
    });
  }
}

function* watchRequestCommonBoard() {
  yield takeLatest(COMMON_BOARD_REQUEST, requestCommonBoardSaga);
}

function* watchRequestCommonPost() {
  yield takeLatest(COMMON_POST_REQUEST, requestCommonPostSaga);
}

function* watchRequestCommonPostRegister() {
  yield takeLatest(COMMON_POST_REGISTER_REQUEST, requestCommonPostRegisterSaga);
}

function* watchRequestMyPostList() {
  yield takeLatest(MY_POST_LIST_REQUEST, requestMyPostListSaga);
}
function* watchRequestSearchPost() {
  yield takeLatest(SEARCH_POST_REQUEST, requestSearchPostSaga);
}

function* boardSaga() {
  yield all([
    fork(watchRequestCommonBoard),
    fork(watchRequestCommonPost),
    fork(watchRequestCommonPostRegister),
    fork(watchRequestMyPostList),
    fork(watchRequestSearchPost),
  ]);
}

export default boardSaga;
