import { ICommonPostList, ILikedPost, IPostItem, IRecruitPost } from '@types';
import {
  COMMON_POST_LIST_REQUEST,
  COMMON_POST_LIST_SUCCESS,
  COMMON_POST_LIST_FAILURE,
  MY_POST_LIST_REQUEST,
  MY_POST_LIST_SUCCESS,
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
  FILTER_STATUS_RESET,
  FILTER_STATUS_UPDATE,
} from './actions';

export interface InitialState {
  filterStatus: any | null;
  commonPostList: ICommonPostList | null;
  myPostList: Array<IPostItem> | null;
  likedPostList: Array<ILikedPost> | null;
  searchPostList: any | null;
  recruitPostList: Array<IRecruitPost> | null;
  teamProfileList: any;
  commonPostListRequest: boolean;
  commonPostListSuccess: boolean;
  commonPostListFailure: string | null;
  myPostListRequest: boolean;
  myPostListSuccess: boolean;
  myPostListFailure: string | null;
  searchPostListRequest: boolean;
  searchPostListSuccess: boolean;
  searchPostListFailure: string | null;
  likedPostListRequest: boolean;
  likedPostListSuccess: boolean;
  likedPostListFailure: string | null;
  recruitPostListRequest: boolean;
  recruitPostListSuccess: boolean;
  recruitPostListFailure: string | null;
  teamProfileListRequest: boolean;
  teamProfileListSuccess: boolean;
  teamProfileListFailure: string | null;
}
// 글 목록 필터 초기화
export interface FilterStatusReset {
  type: typeof FILTER_STATUS_RESET;
}

// 글 목록 필터 업데이트
export interface FilterStatusUpdate {
  type: typeof FILTER_STATUS_UPDATE;
  data: any;
  // TODO 데이터 타입 정확하게 작성하기 !!!!!!!
}

// 자유/질문글 리스트 가져오기
export interface CommonPostListRequest {
  type: typeof COMMON_POST_LIST_REQUEST;
}

export interface CommonPostListSuccess {
  type: typeof COMMON_POST_LIST_SUCCESS;
  data: ICommonPostList;
}

export interface CommonPostListFailure {
  type: typeof COMMON_POST_LIST_FAILURE;
  error: string;
}

// 내가 쓴 게시판 가져오기
export interface MyPostListRequest {
  type: typeof MY_POST_LIST_REQUEST;
}

export interface MyPostListSuccess {
  type: typeof MY_POST_LIST_SUCCESS;
  data: Array<IPostItem>;
}

export interface MyPostListFailure {
  type: typeof MY_POST_LIST_FAILURE;
  error: string;
}

// 검색 결과 게시글 리스트 가져오기
export interface SearchPostListRequest {
  type: typeof SEARCH_POST_LIST_REQUEST;
}

export interface SearchPostListSuccess {
  type: typeof SEARCH_POST_LIST_SUCCESS;
  // TODO 수정하기 타입
  data: any;
}

export interface SearchPostListFailure {
  type: typeof SEARCH_POST_LIST_FAILURE;
  error: string;
}

// 좋아요 누른 글 가져오기
export interface LikedPostListRequest {
  type: typeof LIKED_POST_LIST_REQUEST;
}

export interface LikedPostListSuccess {
  type: typeof LIKED_POST_LIST_SUCCESS;
  data: Array<ILikedPost>;
}

export interface LikedPostListFailure {
  type: typeof LIKED_POST_LIST_FAILURE;
  error: string;
}

// 모집 게시판 글 리스트 가져오기
export interface RecruitPostListRequest {
  type: typeof RECRUIT_POST_LIST_REQUEST;
}

export interface RecruitPostListSuccess {
  type: typeof RECRUIT_POST_LIST_SUCCESS;
  data: Array<IRecruitPost>;
}

export interface RecruitPostListFailure {
  type: typeof RECRUIT_POST_LIST_FAILURE;
  error: string;
}

export interface TeamProfileListRequest {
  type: typeof TEAM_PROFILE_LIST_REQUEST;
}

export interface TeamProfileListSuccess {
  type: typeof TEAM_PROFILE_LIST_SUCCESS;
  // TODO 수정하기
  data: any;
}

export interface TeamProfileListFailure {
  type: typeof TEAM_PROFILE_LIST_FAILURE;
  error: string;
}

export type PostListActions =
  | FilterStatusReset
  | FilterStatusUpdate
  | CommonPostListRequest
  | CommonPostListSuccess
  | CommonPostListFailure
  | MyPostListRequest
  | MyPostListSuccess
  | MyPostListFailure
  | SearchPostListRequest
  | SearchPostListSuccess
  | SearchPostListFailure
  | LikedPostListRequest
  | LikedPostListSuccess
  | LikedPostListFailure
  | RecruitPostListRequest
  | RecruitPostListSuccess
  | RecruitPostListFailure
  | TeamProfileListRequest
  | TeamProfileListSuccess
  | TeamProfileListFailure;
