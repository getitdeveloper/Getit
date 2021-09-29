import produce from 'immer';
import {
  COMMENT_REGISTER_REQUEST,
  COMMENT_REGISTER_SUCCESS,
  COMMENT_REGISTER_FAILURE,
} from './actions';
import { InitialState, CommentActions } from './commentTypes';

// 초기 상태
const initialState: InitialState = {
  comment: null,
  commentRegisterRequest: false,
  commentRegisterSuccess: false,
  commentRegisterFailure: null,
};

const reducer = (state = initialState, action: CommentActions): InitialState =>
  produce(state, (draft) => {
    switch (action.type) {
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
      default:
        return state;
    }
  });

export default reducer;
