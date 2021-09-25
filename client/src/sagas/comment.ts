import axios from 'axios';
import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
import {
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAILURE,
  COMMENT_REGISTER_REQUEST,
  COMMENT_REGISTER_SUCCESS,
  COMMENT_REGISTER_FAILURE,
  MY_COMMENT_REQUEST,
  MY_COMMENT_SUCCESS,
  MY_COMMENT_FAILURE,
} from '../reducers/actions';

// 댓글 받아오기
const requestComment = (data: any) => {
  return axios.get(`/api/${data.board}/commoncomment/`);
};

function* requestCommentSaga(action: any): any {
  try {
    const response = yield call(requestComment, action.data);
    console.log('댓글 정보 응답 ===>', response);

    yield put({
      type: COMMENT_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: COMMENT_FAILURE,
      error,
    });
  }
}

// 자유/질문게시글 댓글 작성하기
const requestCommentRegister = (data: any) => {
  return axios.post(`/api/${data.board}/commoncomment/`, data.comment);
};

function* requestCommentRegisterSaga(action: any): any {
  try {
    const response = yield call(requestCommentRegister, action.data);
    console.log('댓글 작성후 정보 응답 ===>', response);

    yield put({
      type: COMMENT_REGISTER_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: COMMENT_REGISTER_FAILURE,
      error,
    });
  }
}

// 자유/질문게시글에 내가 쓴 댓글 받아오기
const requestMyComment = (data: any) => {
  return axios.get(`/api/mycommoncomment/${data.user}`);
};

function* requestMyCommentSaga(action: any): any {
  try {
    const response = yield call(requestMyComment, action.data);
    console.log('내가 쓴 댓글 정보 응답 ===>', response);

    yield put({
      type: MY_COMMENT_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: MY_COMMENT_FAILURE,
      error,
    });
  }
}

function* watchRequestComment() {
  yield takeLatest(COMMENT_REQUEST, requestCommentSaga);
}

function* watchRequestCommentRegister() {
  yield takeLatest(COMMENT_REGISTER_REQUEST, requestCommentRegisterSaga);
}

function* watchRequestMyComment() {
  yield takeLatest(MY_COMMENT_REQUEST, requestMyCommentSaga);
}

function* commentSaga() {
  yield all([
    fork(watchRequestComment),
    fork(watchRequestCommentRegister),
    fork(watchRequestMyComment),
  ]);
}

export default commentSaga;
