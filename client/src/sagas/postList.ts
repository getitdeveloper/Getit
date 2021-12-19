import axios from 'axios';
import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
import {
  COMMON_POST_LIST_SUCCESS,
  COMMON_POST_LIST_FAILURE,
  COMMON_POST_LIST_REQUEST,
  MY_POST_LIST_SUCCESS,
  MY_POST_LIST_REQUEST,
  MY_POST_LIST_FAILURE,
  SEARCH_POST_LIST_REQUEST,
  SEARCH_POST_LIST_SUCCESS,
  SEARCH_POST_LIST_FAILURE,
  LIKED_POST_LIST_REQUEST,
  LIKED_POST_LIST_SUCCESS,
  LIKED_POST_LIST_FAILURE,
  RECRUIT_POST_LIST_REQUEST,
  RECRUIT_POST_LIST_SUCCESS,
  RECRUIT_POST_LIST_FAILURE,
  TEAM_PROFILE_LIST_REQUEST,
  TEAM_PROFILE_LIST_SUCCESS,
  TEAM_PROFILE_LIST_FAILURE,
} from '../reducers/actions';
import {
  ICommonPostListData,
  ICommonPostList,
  IMyPostListData,
  IMyPostListAction,
  ILikedPostListData,
  ILikedPostList,
  ITeamProfileListData,
  ITeamProfileList,
  IRecruitPostList,
} from './postListTypes';

// 자유/질문 게시판 리스트 받아오기
const requestCommonPostList = ({ page, category }: ICommonPostListData) => {
  return axios.get(`/api/board?category=${category}&page=${page}`);
};

function* requestCommonPostListSaga(action: ICommonPostList): any {
  try {
    const response = yield call(requestCommonPostList, action.data);
    // console.log('자유/질문 게시글 정보 응답 ===>', response);

    yield put({
      type: COMMON_POST_LIST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    // console.error(error);
    yield put({
      type: COMMON_POST_LIST_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 내가 쓴 모집/자유/질문 게시글 리스트 받아오기
const requestMyPostList = (data: IMyPostListData) => {
  // 모집 게시글 요청
  if (data.category === 'recruit') {
    return axios.get(`/api/myrecruitmentboard/${data.user}/`);
  }
  // 자유/질문 게시글 요청
  return axios.get(
    `/api/mycommonboard/${data.user}?category=${data.category}&page=${data.page}`,
  );
};

function* requestMyPostListSaga(action: IMyPostListAction): any {
  try {
    const response = yield call(requestMyPostList, action.data);
    // console.log('내가 쓴 게시글 정보 응답 ===>', response);
    yield put({
      type: MY_POST_LIST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    // console.error(error);
    yield put({
      type: MY_POST_LIST_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 좋아요 누른 게시글 리스트 받아오기
const requestLikedPostList = (data: ILikedPostListData) => {
  // 모집게시판 좋아요 누른 게시글 리스트 받아오기
  if (data.category === 'recruit') {
    return axios.get(`/api/recruitlikepost/${data.user}/`);
  }
  // 질문/자유 게시판 좋아요 누른 게시글 리스트 받아오기
  return axios.get(
    `/api/commonlikepost/${data.user}/?category=${data.category}&page=${data.page}`,
  );
};

function* requestLikedPostListSaga(action: ILikedPostList): any {
  try {
    const response = yield call(requestLikedPostList, action.data);
    // console.log('좋아요 누른 글 정보 응답 ===>', response);
    yield put({
      type: LIKED_POST_LIST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    // console.error(error);
    yield put({
      type: LIKED_POST_LIST_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 게시글 검색
const requestSearchPostList = (data: string) => {
  return axios.get(`/api/wholepost/?search=${data}`);
};

function* requestSearchPostListSaga(action: {
  type: string;
  data: string;
}): any {
  try {
    const response = yield call(requestSearchPostList, action.data);
    // console.log('게시글 전체 검색 응답 ===>', response);
    yield put({
      type: SEARCH_POST_LIST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    // console.error(error);
    yield put({
      type: SEARCH_POST_LIST_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 모집 게시판 게시글 리스트
const requestRecruitPostList = (data: number) => {
  if (data === 1) {
    return axios.get(`/api/recruitmentboard/`);
  }
  return axios.get(`/api/recruitmentboard/?page=${data}`);
};

function* requestRecruitPostListSaga(action: IRecruitPostList): any {
  try {
    const response = yield call(requestRecruitPostList, action.data);
    // console.log('모집 게시판 게시글 목록 응답 ===>', response);
    yield put({
      type: RECRUIT_POST_LIST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    // console.error('모집 게시판 게시글 목록 응답 ===>', error);
    yield put({
      type: RECRUIT_POST_LIST_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 팀 프로필 목록
const requestTeamProfileList = ({ userId }: ITeamProfileListData) => {
  return axios.get(`/api/${userId}/teamprofile`);
};

function* requestTeamProfileListSaga(action: ITeamProfileList): any {
  try {
    const response = yield call(requestTeamProfileList, action.data);
    // console.log('팀 프로필 목록 응답 ===>', response);
    yield put({
      type: TEAM_PROFILE_LIST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    console.error('팀 프로필 목록 응답 ===>', error);
    yield put({
      type: TEAM_PROFILE_LIST_FAILURE,
      error,
    });
    // return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

function* watchRequestCommonPostList() {
  yield takeLatest(COMMON_POST_LIST_REQUEST, requestCommonPostListSaga);
}

function* watchRequestMyPostList() {
  yield takeLatest(MY_POST_LIST_REQUEST, requestMyPostListSaga);
}

function* watchRequestLikedPostList() {
  yield takeLatest(LIKED_POST_LIST_REQUEST, requestLikedPostListSaga);
}

function* watchRequestSearchPostList() {
  yield takeLatest(SEARCH_POST_LIST_REQUEST, requestSearchPostListSaga);
}

function* watchRequestRecruitPostList() {
  yield takeLatest(RECRUIT_POST_LIST_REQUEST, requestRecruitPostListSaga);
}

function* watchRequestTeamProfileList() {
  yield takeLatest(TEAM_PROFILE_LIST_REQUEST, requestTeamProfileListSaga);
}

function* postListSaga(): Generator {
  yield all([
    fork(watchRequestCommonPostList),
    fork(watchRequestMyPostList),
    fork(watchRequestSearchPostList),
    fork(watchRequestLikedPostList),
    fork(watchRequestRecruitPostList),
    fork(watchRequestTeamProfileList),
  ]);
}

export default postListSaga;
