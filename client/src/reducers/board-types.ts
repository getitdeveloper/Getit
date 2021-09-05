import { IBoard, IPost } from '../types';
import {
  FREE_BOARD_SUCCESS,
  FREE_BOARD_FAILURE,
  FREE_BOARD_REQUEST,
  FREE_POST_SUCCESS,
  FREE_POST_FAILURE,
  FREE_POST_REQUEST,
  FREE_POST_REGISTER_REQUEST,
  FREE_POST_REGISTER_FAILURE,
  FREE_POST_REGISTER_SUCCESS,
} from './actions';

export interface InitialState {
  PostContent: IPost | null;
  BoardList: IBoard | null;
  freePostRequest: boolean;
  freePostSuccess: boolean;
  freePostFailure: string | null;
  freePostRegisterRequest: boolean;
  freePostRegisterSuccess: boolean;
  freePostRegisterFailure: string | null;
  freeBoardRequest: boolean;
  freeBoardSuccess: boolean;
  freeBoardFailure: string | null;
}

// 자유게시판 받아오기
export interface FreeBoardRequest {
  type: typeof FREE_BOARD_REQUEST;
}

export interface FreeBoardSuccess {
  type: typeof FREE_BOARD_SUCCESS;
  data: IBoard;
}

export interface FreeBoardFailure {
  type: typeof FREE_BOARD_FAILURE;
  error: string;
}

// 자유게시판 글 가져오기
export interface FreePostRequest {
  type: typeof FREE_POST_REQUEST;
}

export interface FreePostSuccess {
  type: typeof FREE_POST_SUCCESS;
  data: IPost;
}

export interface FreePostFailure {
  type: typeof FREE_POST_FAILURE;
  error: string;
}

// 자유게시판 글 쓰기
export interface FreePostRegisterRequest {
  type: typeof FREE_POST_REGISTER_REQUEST;
}

export interface FreePostRegisterSuccess {
  type: typeof FREE_POST_REGISTER_SUCCESS;
  data: IPost;
}

export interface FreePostRegisterFailure {
  type: typeof FREE_POST_REGISTER_FAILURE;
  error: string;
}

export type BoardActions =
  | FreeBoardSuccess
  | FreeBoardRequest
  | FreeBoardFailure
  | FreePostSuccess
  | FreePostRequest
  | FreePostFailure
  | FreePostRegisterSuccess
  | FreePostRegisterRequest
  | FreePostRegisterFailure;
