import { IBoard, ILikedPost, IPostItem, IRecruitPost } from '../types';
import {
  COMMON_BOARD_REQUEST,
  COMMON_BOARD_SUCCESS,
  COMMON_BOARD_FAILURE,
  COMMON_POST_REQUEST,
  COMMON_POST_SUCCESS,
  COMMON_POST_FAILURE,
  COMMON_POST_REGISTER_REQUEST,
  COMMON_POST_REGISTER_SUCCESS,
  COMMON_POST_REGISTER_FAILURE,
  MY_POST_LIST_REQUEST,
  MY_POST_LIST_SUCCESS,
  MY_POST_LIST_FAILURE,
  COMMON_POST_LIKE_REQUEST,
  COMMON_POST_LIKE_SUCCESS,
  COMMON_POST_LIKE_FAILURE,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
  SEARCH_POST_FAILURE,
  LIKED_POST_LIST_REQUEST,
  LIKED_POST_LIST_SUCCESS,
  LIKED_POST_LIST_FAILURE,
  RECRUIT_POST_LIST_REQUEST,
  RECRUIT_POST_LIST_SUCCESS,
  RECRUIT_POST_LIST_FAILURE,
  RECRUIT_POST_DETAIL_REQUEST,
  RECRUIT_POST_DETAIL_SUCCESS,
  RECRUIT_POST_DETAIL_FAILURE,
} from './actions';

export interface InitialState {
  postContent: IPostItem | null;
  boardList: IBoard | null;
  myPostList: Array<IPostItem> | null;
  likedPostList: Array<ILikedPost> | null;
  likeCounts: { counts: number } | null;
  // TODO 수정하기
  searchPostList: any | null;
  recruitPostList: Array<IRecruitPost> | null;
  recruitPostDetail: IRecruitPost | null;
  commonPostRequest: boolean;
  commonPostSuccess: boolean;
  commonPostFailure: string | null;
  commonPostRegisterRequest: boolean;
  commonPostRegisterSuccess: boolean;
  commonPostRegisterFailure: string | null;
  commonBoardRequest: boolean;
  commonBoardSuccess: boolean;
  commonBoardFailure: string | null;
  myPostListRequest: boolean;
  myPostListSuccess: boolean;
  myPostListFailure: string | null;
  commonPostLikeRequest: boolean;
  commonPostLikeSuccess: boolean;
  commonPostLikeFailure: string | null;
  searchPostRequest: boolean;
  searchPostSuccess: boolean;
  searchPostFailure: string | null;
  likedPostListRequest: boolean;
  likedPostListSuccess: boolean;
  likedPostListFailure: string | null;
  recruitPostListRequest: boolean;
  recruitPostListSuccess: boolean;
  recruitPostListFailure: string | null;
  recruitPostDetailRequest: boolean;
  recruitPostDetailSuccess: boolean;
  recruitPostDetailFailure: string | null;
}

// 자유/질문게시판 받아오기
export interface CommonBoardRequest {
  type: typeof COMMON_BOARD_REQUEST;
}

export interface CommonBoardSuccess {
  type: typeof COMMON_BOARD_SUCCESS;
  data: IBoard;
}

export interface CommonBoardFailure {
  type: typeof COMMON_BOARD_FAILURE;
  error: string;
}

// 자유/질문게시판 글 가져오기
export interface CommonPostRequest {
  type: typeof COMMON_POST_REQUEST;
}

export interface CommonPostSuccess {
  type: typeof COMMON_POST_SUCCESS;
  data: IPostItem;
}

export interface CommonPostFailure {
  type: typeof COMMON_POST_FAILURE;
  error: string;
}

// 자유/질문게시판 글 쓰기
export interface CommonPostRegisterRequest {
  type: typeof COMMON_POST_REGISTER_REQUEST;
}

export interface CommonPostRegisterSuccess {
  type: typeof COMMON_POST_REGISTER_SUCCESS;
  data: IPostItem;
}

export interface CommonPostRegisterFailure {
  type: typeof COMMON_POST_REGISTER_FAILURE;
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

export interface SearchPostRequest {
  type: typeof SEARCH_POST_REQUEST;
}

export interface SearchPostSuccess {
  type: typeof SEARCH_POST_SUCCESS;
  // TODO 수정하기 타입
  data: any;
}

export interface SearchPostFailure {
  type: typeof SEARCH_POST_FAILURE;
  error: string;
}

// 게시글에 좋아요 누르기
export interface CommonPostLikeRequest {
  type: typeof COMMON_POST_LIKE_REQUEST;
}

export interface CommonPostLikeSuccess {
  type: typeof COMMON_POST_LIKE_SUCCESS;
  data: {
    counts: number;
  };
}

export interface CommonPostLikeFailure {
  type: typeof COMMON_POST_LIKE_FAILURE;
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

// 모집 게시판 글 목록 가져오기
export interface RecruitPostRequest {
  type: typeof RECRUIT_POST_LIST_REQUEST;
}

export interface RecruitPostSuccess {
  type: typeof RECRUIT_POST_LIST_SUCCESS;
  data: Array<IRecruitPost>;
}

export interface RecruitPostFailure {
  type: typeof RECRUIT_POST_LIST_FAILURE;
  error: string;
}

// 모집 게시판 글 상세내용 가져오기
export interface RecruitPostDetailRequest {
  type: typeof RECRUIT_POST_DETAIL_REQUEST;
}

export interface RecruitPostDetailSuccess {
  type: typeof RECRUIT_POST_DETAIL_SUCCESS;
  data: IRecruitPost;
}

export interface RecruitPostDetailFailure {
  type: typeof RECRUIT_POST_DETAIL_FAILURE;
  error: string;
}

export type BoardActions =
  | CommonBoardRequest
  | CommonBoardSuccess
  | CommonBoardFailure
  | CommonPostRequest
  | CommonPostSuccess
  | CommonPostFailure
  | CommonPostRegisterRequest
  | CommonPostRegisterSuccess
  | CommonPostRegisterFailure
  | MyPostListRequest
  | MyPostListSuccess
  | MyPostListFailure
  | CommonPostLikeRequest
  | CommonPostLikeSuccess
  | CommonPostLikeFailure
  | SearchPostRequest
  | SearchPostSuccess
  | SearchPostFailure
  | LikedPostListRequest
  | LikedPostListSuccess
  | LikedPostListFailure
  | RecruitPostRequest
  | RecruitPostSuccess
  | RecruitPostFailure
  | RecruitPostDetailRequest
  | RecruitPostDetailSuccess
  | RecruitPostDetailFailure;
