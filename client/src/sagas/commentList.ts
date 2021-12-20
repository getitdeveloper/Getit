import axios from 'axios';
import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
import {
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAILURE,
  MY_COMMENT_LIST_REQUEST,
  MY_COMMENT_LIST_SUCCESS,
  MY_COMMENT_LIST_FAILURE,
} from '../reducers/actions';

// 자유/질문게시판의 댓글 리스트 받아오기
const requestCommentList = (data: any) => {
  return axios.get(`/api/${data.board}/commoncomment/`);
};

function* requestCommentListSaga(action: any): any {
  try {
    const response = yield call(requestCommentList, action.data);
    console.log('댓글 정보 응답 ===>', response);

    yield put({
      type: COMMENT_LIST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: COMMENT_LIST_FAILURE,
      error,
    });
  }
}

// 자유/질문게시글에 내가 쓴 댓글 받아오기
const requestMyCommentList = (data: any) => {
  return axios.get(`/api/mycommoncomment/${data.user}`);
};

function* requestMyCommentListSaga(action: any): any {
  try {
    const response = yield call(requestMyCommentList, action.data);
    console.log('내가 쓴 댓글 정보 응답 ===>', response);

    yield put({
      type: MY_COMMENT_LIST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: MY_COMMENT_LIST_FAILURE,
      error,
    });
  }
}

function* watchRequestCommentList() {
  yield takeLatest(COMMENT_LIST_REQUEST, requestCommentListSaga);
}

function* watchRequestMyCommentList() {
  yield takeLatest(MY_COMMENT_LIST_REQUEST, requestMyCommentListSaga);
}

function* commentListSaga(): Generator {
  yield all([fork(watchRequestCommentList), fork(watchRequestMyCommentList)]);
}

export default commentListSaga;
