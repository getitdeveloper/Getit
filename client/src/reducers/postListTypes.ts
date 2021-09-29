import { IBoard, ILikedPost, IPostItem, IRecruitPost } from '../types';
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
} from './actions';

export interface InitialState {
  commonPostList: IBoard | null;
  myPostList: Array<IPostItem> | null;
  likedPostList: Array<ILikedPost> | null;
  // TODO 수정하기
  searchPostList: any | null;
  recruitPostList: Array<IRecruitPost> | null;
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
}

// 자유/질문글 리스트 가져오기
export interface CommonPostListRequest {
  type: typeof COMMON_POST_LIST_REQUEST;
}

export interface CommonPostListSuccess {
  type: typeof COMMON_POST_LIST_SUCCESS;
  data: IBoard;
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

export type PostListActions =
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
  | RecruitPostListFailure;
