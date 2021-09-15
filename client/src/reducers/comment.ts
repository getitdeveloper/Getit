import produce from 'immer';
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
import { InitialState, CommentActions } from './commentTypes';

// 초기 상태
const initialState: InitialState = {
  commentList: null,
  comment: null,
  myComment: null,
  commentRequest: false,
  commentSuccess: false,
  commentFailure: null,
  commentRegisterRequest: false,
  commentRegisterSuccess: false,
  commentRegisterFailure: null,
  myCommentRequest: false,
  myCommentSuccess: false,
  myCommentFailure: null,
};

const reducer = (state = initialState, action: CommentActions): InitialState =>
  produce(state, (draft) => {
    switch (action.type) {
      case COMMENT_REQUEST:
        draft.commentRequest = true;
        draft.commentSuccess = false;
        draft.commentFailure = null;
        break;
      case COMMENT_SUCCESS:
        draft.commentRequest = false;
        draft.commentSuccess = true;
        draft.commentFailure = null;
        draft.commentList = action.data;
        break;
      case COMMENT_FAILURE:
        draft.commentRequest = false;
        draft.commentSuccess = false;
        draft.commentFailure = action.error;
        break;
      case COMMENT_REGISTER_REQUEST:
        draft.commentRegisterRequest = true;
        draft.commentRegisterSuccess = false;
        draft.commentRegisterFailure = null;
        break;
      case COMMENT_REGISTER_SUCCESS:
        draft.commentRegisterRequest = false;
        draft.commentRegisterSuccess = true;
        draft.commentRegisterFailure = null;
        draft.comment = action.data;
        break;
      case COMMENT_REGISTER_FAILURE:
        draft.commentRegisterRequest = false;
        draft.commentRegisterSuccess = false;

        draft.commentRegisterFailure = action.error;
        break;
      case MY_COMMENT_REQUEST:
        draft.myCommentRequest = true;
        draft.myCommentSuccess = false;
        draft.myCommentFailure = null;
        break;
      case MY_COMMENT_SUCCESS:
        draft.myCommentRequest = false;
        draft.myCommentSuccess = true;
        draft.myCommentFailure = null;
        draft.myComment = action.data;
        break;
      case MY_COMMENT_FAILURE:
        draft.myCommentRequest = false;
        draft.myCommentSuccess = false;
        draft.myCommentFailure = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
