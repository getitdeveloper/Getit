import { IComment, ICommentList } from '../types';
import {
  COMMENT_REGISTER_REQUEST,
  COMMENT_REGISTER_SUCCESS,
  COMMENT_REGISTER_FAILURE,
} from './actions';

export interface InitialState {
  comment: IComment | null;
  commentRegisterRequest: boolean;
  commentRegisterSuccess: boolean;
  commentRegisterFailure: string | null;
}

// 댓글 등록하기
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
  | CommentRegisterRequest
  | CommentRegisterSuccess
  | CommentRegisterFailure;
