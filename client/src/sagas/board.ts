import axios from 'axios';
import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
import {
  FREE_BOARD_SUCCESS,
  FREE_BOARD_FAILURE,
  FREE_BOARD_REQUEST,
  FREE_POST_SUCCESS,
  FREE_POST_FAILURE,
  FREE_POST_REQUEST,
  FREE_POST_REGISTER_REQUEST,
  FREE_POST_REGISTER_FAILURE,
  FREE_POST_REGISTER_SUCCESS,
} from '../reducers/actions';
import {
  ResponseFreeBoard,
  ResponseFreePost,
  FreePostData,
} from './board-types';

// 자유게시판 받아오기
const requestFreeBoard = (page: number) => {
  return axios.get(`/api/board?category=free&page=${page}`);
};

function* requestFreeBoardSaga(action: any): any {
  try {
    console.log('자유게시판 받아오기');
    const response = yield call(requestFreeBoard, action.data.page);
    console.log('자유게시판 정보 응답 ===>', response);

    yield put({
      type: FREE_BOARD_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: FREE_BOARD_FAILURE,
      error,
    });
  }
}

// 자유 게시글 받아오기
const requestFreePost = (id: string) => {
  return axios.get(`/api/board/${id}`);
};

function* requestFreePostSaga(action: any): any {
  try {
    const response = yield call(requestFreePost, action.data.id);
    console.log('자유게시글 정보 응답 ===>', response);

    yield put({
      type: FREE_POST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: FREE_POST_FAILURE,
      error,
    });
  }
}

// 자유 게시글 작성하기
const requestFreePostRegister = (data: FreePostData) => {
  return axios.post(`/api/board/`, data);
};

function* requestFreePostRegisterSaga(action: any): any {
  try {
    const response = yield call(requestFreePostRegister, action.data);
    console.log('자유게시글 작성 후 정보 응답 ===>', response);

    yield put({
      type: FREE_POST_REGISTER_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: FREE_POST_REGISTER_FAILURE,
      error,
    });
  }
}

function* watchRequestFreeBoard() {
  yield takeLatest(FREE_BOARD_REQUEST, requestFreeBoardSaga);
}

function* watchRequestFreePost() {
  yield takeLatest(FREE_POST_REQUEST, requestFreePostSaga);
}

function* watchRequestFreePostRegister() {
  yield takeLatest(FREE_POST_REGISTER_REQUEST, requestFreePostRegisterSaga);
}

function* boardSaga() {
  yield all([
    fork(watchRequestFreeBoard),
    fork(watchRequestFreePost),
    fork(watchRequestFreePostRegister),
  ]);
}

export default boardSaga;
