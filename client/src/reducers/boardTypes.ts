import { IBoard, IPost } from '../types';
import {
  COMMON_BOARD_SUCCESS,
  COMMON_BOARD_FAILURE,
  COMMON_BOARD_REQUEST,
  COMMON_POST_SUCCESS,
  COMMON_POST_FAILURE,
  COMMON_POST_REQUEST,
  COMMON_POST_REGISTER_REQUEST,
  COMMON_POST_REGISTER_FAILURE,
  COMMON_POST_REGISTER_SUCCESS,
  MY_POST_LIST_SUCCESS,
  MY_POST_LIST_REQUEST,
  MY_POST_LIST_FAILURE,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
  SEARCH_POST_FAILURE,
} from './actions';

export interface InitialState {
  PostContent: IPost | null;
  BoardList: IBoard | null;
  MyPostList: Array<IPost> | null;
  // TODO 수정하기
  searchPostList: any | null;
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
  searchPostRequest: boolean;
  searchPostSuccess: boolean;
  searchPostFailure: string | null;
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
  data: IPost;
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
  data: IPost;
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
  data: Array<IPost>;
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

export type BoardActions =
  | CommonBoardSuccess
  | CommonBoardRequest
  | CommonBoardFailure
  | CommonPostSuccess
  | CommonPostRequest
  | CommonPostFailure
  | CommonPostRegisterSuccess
  | CommonPostRegisterRequest
  | CommonPostRegisterFailure
  | MyPostListRequest
  | MyPostListSuccess
  | MyPostListFailure
  | SearchPostRequest
  | SearchPostSuccess
  | SearchPostFailure;
