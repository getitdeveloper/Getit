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
} from '../reducers/actions';
import { BoardData, PostData } from './boardTypes';

// 자유게시판 받아오기
const requestCommonBoard = (data: BoardData) => {
  return axios.get(`/api/board?category=${data.category}`);
  // return axios.get(`/api/board?category=${data.category}&page=${data.page}`);
};

function* requestCommonBoardSaga(action: any): any {
  try {
    console.log('자유게시판 받아오기');
    const response = yield call(requestCommonBoard, action.data);
    console.log('자유게시판 정보 응답 ===>', response);

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

// 자유 게시글 받아오기
const requestCommonPost = (id: string) => {
  return axios.get(`/api/board/${id}`);
};

function* requestCommonPostSaga(action: any): any {
  try {
    const response = yield call(requestCommonPost, action.data.id);
    console.log('자유게시글 정보 응답 ===>', response);

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

// 자유 게시글 작성하기
const requestCommonPostRegister = (data: PostData) => {
  return axios.post(`/api/board/`, data);
};

function* requestCommonPostRegisterSaga(action: any): any {
  try {
    const response = yield call(requestCommonPostRegister, action.data);
    console.log('자유게시글 작성 후 정보 응답 ===>', response);

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

function* watchRequestCommonBoard() {
  yield takeLatest(COMMON_BOARD_REQUEST, requestCommonBoardSaga);
}

function* watchRequestCommonPost() {
  yield takeLatest(COMMON_POST_REQUEST, requestCommonPostSaga);
}

function* watchRequestCommonPostRegister() {
  yield takeLatest(COMMON_POST_REGISTER_REQUEST, requestCommonPostRegisterSaga);
}

function* boardSaga() {
  yield all([
    fork(watchRequestCommonBoard),
    fork(watchRequestCommonPost),
    fork(watchRequestCommonPostRegister),
  ]);
}

export default boardSaga;
