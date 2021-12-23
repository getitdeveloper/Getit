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
  TEAM_PROFILE_POST_DETAIL_REQUEST,
  TEAM_PROFILE_POST_DETAIL_SUCCESS,
  TEAM_PROFILE_POST_DETAIL_FAILURE,
  RECRUIT_POST_LIKE_REQUEST,
  RECRUIT_POST_LIKE_SUCCESS,
  RECRUIT_POST_LIKE_FAILURE,
} from '@reducers/actions';
import {
  ICommonPostData,
  ICommonPost,
  ITeamProfileData,
  ITeamProfileApiData,
  IRecruitPostingData,
  IRecruitPosting,
  ITeamProfileIdData,
  ITeamProfileIdApiData,
  ICommonLikePost,
  ICommonLikePostData,
  IRecruitPost,
  IRecruitPostLikeData,
  IRecruitPostLike,
} from '@sagas/postTypes';

// 자유/질문 게시글 받아오기
const requestCommonPost = (id: string) => {
  return axios.get(`/api/board/${id}`);
};

function* requestCommonPostSaga(action: any): any {
  try {
    const response = yield call(requestCommonPost, action.data.id);
    // console.log('자유/질문 게시글 정보 응답 ===>', response);
    yield put({
      type: COMMON_POST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    // console.error(error);
    yield put({
      type: COMMON_POST_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 자유/질문 게시글 작성하기
const requestCommonPostRegister = (data: ICommonPostData) => {
  return axios.post(`/api/board/`, data);
};

function* requestCommonPostRegisterSaga(action: ICommonPost): any {
  try {
    const response = yield call(requestCommonPostRegister, action.data);
    // console.log('자유/질문 게시글 작성 후 정보 응답 ===>', response);
    yield put({
      type: COMMON_POST_REGISTER_SUCCESS,
      data: response.data,
    });
    alert('게시글 작성 완료');
    action.history.push(`/${action.boardType}Board`);
  } catch (error) {
    // console.error(error);
    yield put({
      type: COMMON_POST_REGISTER_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 자유/질문 게시판 게시글 좋아요
const requestCommonPostLike = ({ postId, userId }: ICommonLikePostData) => {
  return axios.post(`/api/${postId}/commonlikes/`, { user: userId });
};

function* requestCommonPostLikeSaga(action: ICommonLikePost): any {
  try {
    const response = yield call(requestCommonPostLike, action.data);
    console.log('자유/질문 게시글 좋아요 정보 응답 ===>', response);
    yield put({
      type: COMMON_POST_LIKE_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    // console.error(error);
    yield put({
      type: COMMON_POST_LIKE_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 모집 게시판 게시글 상세내용 가져오기
const requestRecruitPost = (data: string) => {
  return axios.get(`/api/recruitmentboard/${data}`);
};

function* requestRecruitPostSaga(action: IRecruitPost): any {
  try {
    const response = yield call(requestRecruitPost, action.data);
    // console.log('모집 게시판 게시글 상세내용 응답 ===>', response);
    yield put({
      type: RECRUIT_POST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    // console.error('모집 게시판 게시글 상세내용 응답 ===>', error);
    yield put({
      type: RECRUIT_POST_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 스터디 모집 게시글 등록
const requestRecruitPosting = (data: IRecruitPostingData) => {
  return axios.post(`/api/recruitmentboard/`, data);
};

function* requestRecruitPostingSaga(action: IRecruitPosting): any {
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
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 팀 프로필 생성
const requestTeamProfilePostRegister = (data: ITeamProfileApiData) => {
  return axios.post(`/api/${data.userId}/teamprofile/`, data.formData);
};

function* requestTeamProfilePostRegisterSaga(action: ITeamProfileData): any {
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
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 팀 프로필 삭제
const requestTeamProfilePostRemove = (data: ITeamProfileIdApiData) => {
  return axios.delete(`/api/${data.userId}/teamprofile/${data.postId}`);
};

function* requestTeamProfilePostRemoveSaga(action: ITeamProfileIdData): any {
  try {
    const response = yield call(requestTeamProfilePostRemove, action.data);
    yield put({
      type: TEAM_PROFILE_REMOVE_SUCCESS,
      data: response.data,
    });
    alert('팀 프로필 삭제 완료');
  } catch (error) {
    yield put({
      type: TEAM_PROFILE_REMOVE_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 팀 프로필 상세내용
const requestTeamProfilePostDetail = (data: ITeamProfileIdApiData) => {
  return axios.get(`/api/${data.userId}/teamprofile/${data.postId}`);
};

function* requestTeamProfilePostDetailSaga(action: ITeamProfileIdData): any {
  try {
    const response = yield call(requestTeamProfilePostDetail, action.data);
    yield put({
      type: TEAM_PROFILE_POST_DETAIL_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    yield put({
      type: TEAM_PROFILE_POST_DETAIL_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

// 모집 게시판 게시글 좋아요
const requestRecruitPostLike = ({ userId, postId }: IRecruitPostLikeData) => {
  return axios.post(`/api/${postId}/recruitlikes/`, { user: userId });
};

function* requestRecruitPostLikeRequest(action: IRecruitPostLike): any {
  try {
    const response = yield call(requestRecruitPostLike, action.data);
    // console.log('모집게시판 좋아요 응답 ===> ', response);
    yield put({
      type: RECRUIT_POST_LIKE_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    yield put({
      type: RECRUIT_POST_LIKE_FAILURE,
      error,
    });
    return alert('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
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

function* watchRequestTeamProfilePostDetail() {
  yield takeLatest(
    TEAM_PROFILE_POST_DETAIL_REQUEST,
    requestTeamProfilePostDetailSaga,
  );
}

function* watchRequestRecruitPostLike() {
  yield takeLatest(RECRUIT_POST_LIKE_REQUEST, requestRecruitPostLikeRequest);
}

function* postSaga(): Generator {
  yield all([
    fork(watchRequestCommonPost),
    fork(watchRequestCommonPostRegister),
    fork(watchRequestCommonPostLike),
    fork(watchRequestRecruitPost),
    fork(watchRequestRecruitPosting),
    fork(watchRequestTeamProfilePostRegister),
    fork(watchRequestTeamProfilePostRemove),
    fork(watchRequestTeamProfilePostDetail),
    fork(watchRequestRecruitPostLike),
  ]);
}

export default postSaga;
