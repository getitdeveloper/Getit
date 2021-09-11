import { IComment } from '../types';
import {
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAILURE,
  COMMENT_REGISTER_REQUEST,
  COMMENT_REGISTER_SUCCESS,
  COMMENT_REGISTER_FAILURE,
} from './actions';

export interface InitialState {
  CommentList: IComment[] | null;
  Comment: IComment | null;
  commentRequest: boolean;
  commentSuccess: boolean;
  commentFailure: string | null;
  commentRegisterRequest: boolean;
  commentRegisterSuccess: boolean;
  commentRegisterFailure: string | null;
}

// 자유게시판 받아오기
export interface CommentRequest {
  type: typeof COMMENT_REQUEST;
}

export interface CommentSuccess {
  type: typeof COMMENT_SUCCESS;
  data: IComment[];
}

export interface CommentFailure {
  type: typeof COMMENT_FAILURE;
  error: string;
}

// 자유게시판 글 쓰기
export interface CommentRegisterRequest {
  type: typeof COMMENT_REGISTER_REQUEST;
}

export interface CommentRegisterSuccess {
  type: typeof COMMENT_REGISTER_SUCCESS;
  data: IComment;
}

export interface CommentRegisterFailure {
  type: typeof COMMENT_REGISTER_FAILURE;
  error: string;
}

export type CommentActions =
  | CommentSuccess
  | CommentRequest
  | CommentFailure
  | CommentRegisterSuccess
  | CommentRegisterRequest
  | CommentRegisterFailure;
