import axios from 'axios';
import { all, fork } from 'redux-saga/effects';
import boardSaga from './board';
import commentSaga from './comment';
import userSaga from './user';

// axios 요청 기본 주소
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_SERVER_BASE_URL
    : process.env.REACT_APP_DEV_SERVER_BASE_URL;

// cookie 전송을 위한 설정
axios.defaults.withCredentials = true;

export default function* rootSaga(): Generator {
  yield all([fork(userSaga)]);
  yield all([fork(boardSaga)]);
  yield all([fork(commentSaga)]);
}
