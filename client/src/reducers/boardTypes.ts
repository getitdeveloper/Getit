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
} from './actions';

export interface InitialState {
  PostContent: IPost | null;
  BoardList: IBoard | null;
  commonPostRequest: boolean;
  commonPostSuccess: boolean;
  commonPostFailure: string | null;
  commonPostRegisterRequest: boolean;
  commonPostRegisterSuccess: boolean;
  commonPostRegisterFailure: string | null;
  commonBoardRequest: boolean;
  commonBoardSuccess: boolean;
  commonBoardFailure: string | null;
}

// 자유게시판 받아오기
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

// 자유게시판 글 가져오기
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

// 자유게시판 글 쓰기
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

export type BoardActions =
  | CommonBoardSuccess
  | CommonBoardRequest
  | CommonBoardFailure
  | CommonPostSuccess
  | CommonPostRequest
  | CommonPostFailure
  | CommonPostRegisterSuccess
  | CommonPostRegisterRequest
  | CommonPostRegisterFailure;
