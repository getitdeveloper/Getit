import { IComment, ICommentList } from '../types';
import {
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAILURE,
  COMMENT_REGISTER_REQUEST,
  COMMENT_REGISTER_SUCCESS,
  COMMENT_REGISTER_FAILURE,
  MY_COMMENT_REQUEST,
  MY_COMMENT_SUCCESS,
  MY_COMMENT_FAILURE,
} from './actions';

export interface InitialState {
  CommentList: ICommentList[] | null;
  Comment: IComment | null;
  MyComment: ICommentList[] | null;
  commentRequest: boolean;
  commentSuccess: boolean;
  commentFailure: string | null;
  commentRegisterRequest: boolean;
  commentRegisterSuccess: boolean;
  commentRegisterFailure: string | null;
  myCommentRequest: boolean;
  myCommentSuccess: boolean;
  myCommentFailure: string | null;
}

// 자유게시판 받아오기
export interface CommentRequest {
  type: typeof COMMENT_REQUEST;
}

export interface CommentSuccess {
  type: typeof COMMENT_SUCCESS;
  data: ICommentList[];
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

export interface MyCommentRequest {
  type: typeof MY_COMMENT_REQUEST;
}

export interface MyCommentSuccess {
  type: typeof MY_COMMENT_SUCCESS;
  data: ICommentList[];
}

export interface MyCommentFailure {
  type: typeof MY_COMMENT_FAILURE;
  error: string;
}

export type CommentActions =
  | CommentSuccess
  | CommentRequest
  | CommentFailure
  | CommentRegisterSuccess
  | CommentRegisterRequest
  | CommentRegisterFailure
  | MyCommentRequest
  | MyCommentSuccess
  | MyCommentFailure;
