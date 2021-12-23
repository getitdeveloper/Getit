import axios from 'axios';
import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
import {
  COMMENT_REGISTER_REQUEST,
  COMMENT_REGISTER_SUCCESS,
  COMMENT_REGISTER_FAILURE,
} from '../reducers/actions';

// 자유/질문게시글 댓글 작성하기
const requestCommentRegister = (data: any) => {
  return axios.post(`/api/${data.board}/commoncomment/`, data.comment);
};

function* requestCommentRegisterSaga(action: any): any {
  try {
    const response = yield call(requestCommentRegister, action.data);
    // console.log('댓글 작성후 정보 응답 ===>', response);

    yield put({
      type: COMMENT_REGISTER_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    // console.error(error);
    yield put({
      type: COMMENT_REGISTER_FAILURE,
      error,
    });
  }
}

function* watchRequestCommentRegister() {
  yield takeLatest(COMMENT_REGISTER_REQUEST, requestCommentRegisterSaga);
}

function* commentSaga(): Generator {
  yield all([fork(watchRequestCommentRegister)]);
}

export default commentSaga;
