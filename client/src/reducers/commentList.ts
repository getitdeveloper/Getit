import produce from 'immer';
import {
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAILURE,
  MY_COMMENT_LIST_REQUEST,
  MY_COMMENT_LIST_SUCCESS,
  MY_COMMENT_LIST_FAILURE,
} from './actions';
import { InitialState, CommentListActions } from './commentListTypes';

// 초기 상태
const initialState: InitialState = {
  commentList: null,
  myCommentList: null,
  commentListRequest: false,
  commentListSuccess: false,
  commentListFailure: null,
  myCommentListRequest: false,
  myCommentListSuccess: false,
  myCommentListFailure: null,
};

const reducer = (
  state = initialState,
  action: CommentListActions,
): InitialState =>
  produce(state, (draft) => {
    switch (action.type) {
      case COMMENT_LIST_REQUEST:
        draft.commentListRequest = true;
        draft.commentListSuccess = false;
        draft.commentListFailure = null;
        break;
      case COMMENT_LIST_SUCCESS:
        draft.commentListRequest = false;
        draft.commentListSuccess = true;
        draft.commentListFailure = null;
        draft.commentList = action.data;
        break;
      case COMMENT_LIST_FAILURE:
        draft.commentListRequest = false;
        draft.commentListSuccess = false;
        draft.commentListFailure = action.error;
        break;
      case MY_COMMENT_LIST_REQUEST:
        draft.myCommentListRequest = true;
        draft.myCommentListSuccess = false;
        draft.myCommentListFailure = null;
        break;
      case MY_COMMENT_LIST_SUCCESS:
        draft.myCommentListRequest = false;
        draft.myCommentListSuccess = true;
        draft.myCommentListFailure = null;
        draft.myCommentList = action.data;
        break;
      case MY_COMMENT_LIST_FAILURE:
        draft.myCommentListRequest = false;
        draft.myCommentListSuccess = false;
        draft.myCommentListFailure = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
