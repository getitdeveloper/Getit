import { ICommentList } from '../types';
import {
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAILURE,
  MY_COMMENT_LIST_REQUEST,
  MY_COMMENT_LIST_SUCCESS,
  MY_COMMENT_LIST_FAILURE,
} from './actions';

export interface InitialState {
  commentList: ICommentList[] | null;
  myCommentList: ICommentList[] | null;
  commentListRequest: boolean;
  commentListSuccess: boolean;
  commentListFailure: string | null;
  myCommentListRequest: boolean;
  myCommentListSuccess: boolean;
  myCommentListFailure: string | null;
}

// 게시글의 댓글 리스트 받아오기
export interface CommentListRequest {
  type: typeof COMMENT_LIST_REQUEST;
}

export interface CommentListSuccess {
  type: typeof COMMENT_LIST_SUCCESS;
  data: ICommentList[];
}

export interface CommentListFailure {
  type: typeof COMMENT_LIST_FAILURE;
  error: string;
}

// 내가 쓴 댓글 리스트 가져오기
export interface MyCommentListRequest {
  type: typeof MY_COMMENT_LIST_REQUEST;
}

export interface MyCommentListSuccess {
  type: typeof MY_COMMENT_LIST_SUCCESS;
  data: ICommentList[];
}

export interface MyCommentListFailure {
  type: typeof MY_COMMENT_LIST_FAILURE;
  error: string;
}

export type CommentListActions =
  | CommentListRequest
  | CommentListSuccess
  | CommentListFailure
  | MyCommentListRequest
  | MyCommentListSuccess
  | MyCommentListFailure;
