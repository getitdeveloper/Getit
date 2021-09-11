import produce from 'immer';
import {
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAILURE,
  COMMENT_REGISTER_REQUEST,
  COMMENT_REGISTER_SUCCESS,
  COMMENT_REGISTER_FAILURE,
} from './actions';
import { InitialState, CommentActions } from './commentTypes';

// 초기 상태
const initialState: InitialState = {
  CommentList: null,
  Comment: null,
  commentRequest: false,
  commentSuccess: false,
  commentFailure: null,
  commentRegisterRequest: false,
  commentRegisterSuccess: false,
  commentRegisterFailure: null,
};

const reducer = (state = initialState, action: CommentActions): InitialState =>
  produce(state, (draft) => {
    switch (action.type) {
      case COMMENT_SUCCESS:
        draft.commentRequest = false;
        draft.commentSuccess = true;
        draft.commentFailure = null;
        draft.CommentList = action.data;
        break;
      case COMMENT_REQUEST:
        draft.commentRequest = true;
        draft.commentSuccess = false;
        draft.commentFailure = null;
        break;
      case COMMENT_FAILURE:
        draft.commentRequest = false;
        draft.commentSuccess = false;
        draft.commentFailure = action.error;
        break;
      case COMMENT_REGISTER_SUCCESS:
        draft.commentRegisterSuccess = true;
        draft.commentRegisterRequest = false;
        draft.commentRegisterFailure = null;
        draft.Comment = action.data;
        break;
      case COMMENT_REGISTER_REQUEST:
        draft.commentRegisterSuccess = false;
        draft.commentRegisterRequest = true;
        draft.commentRegisterFailure = null;
        break;
      case COMMENT_REGISTER_FAILURE:
        draft.commentRegisterSuccess = false;
        draft.commentRegisterRequest = false;
        draft.commentRegisterFailure = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
