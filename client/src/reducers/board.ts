import produce from 'immer';
import { InitialState, BoardActions } from './boardTypes';
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
  MY_POST_LIST_SUCCESS,
  MY_POST_LIST_REQUEST,
  MY_POST_LIST_FAILURE,
  COMMON_POST_LIKE_REQUEST,
  COMMON_POST_LIKE_SUCCESS,
  COMMON_POST_LIKE_FAILURE,
} from './actions';

// 초기 상태
const initialState: InitialState = {
  PostContent: null,
  BoardList: null,
  MyPostList: null,
  LikeCounts: null,
  commonPostRequest: false,
  commonPostSuccess: false,
  commonPostFailure: null,
  commonPostRegisterRequest: false,
  commonPostRegisterSuccess: false,
  commonPostRegisterFailure: null,
  commonBoardRequest: false,
  commonBoardSuccess: false,
  commonBoardFailure: null,
  myPostListRequest: false,
  myPostListSuccess: false,
  myPostListFailure: null,
  commonPostLikeRequest: false,
  commonPostLikeSuccess: false,
  commonPostLikeFailure: null,
};

const reducer = (state = initialState, action: BoardActions): InitialState =>
  produce(state, (draft) => {
    switch (action.type) {
      case COMMON_BOARD_SUCCESS:
        draft.commonBoardRequest = false;
        draft.commonBoardSuccess = true;
        draft.commonBoardFailure = null;
        draft.BoardList = action.data;
        break;
      case COMMON_BOARD_REQUEST:
        draft.commonBoardRequest = true;
        draft.commonBoardSuccess = false;
        draft.commonBoardFailure = null;
        break;
      case COMMON_BOARD_FAILURE:
        draft.commonBoardRequest = false;
        draft.commonBoardSuccess = false;
        draft.commonBoardFailure = action.error;
        break;
      case COMMON_POST_REQUEST:
        draft.commonPostSuccess = false;
        draft.commonPostRequest = true;
        draft.commonPostFailure = null;
        break;
      case COMMON_POST_SUCCESS:
        draft.commonPostSuccess = true;
        draft.commonPostRequest = false;
        draft.commonPostFailure = null;
        draft.PostContent = action.data;
        break;
      case COMMON_POST_FAILURE:
        draft.commonPostSuccess = false;
        draft.commonPostRequest = false;
        draft.commonPostFailure = action.error;
        break;
      case COMMON_POST_REGISTER_SUCCESS:
        draft.commonPostRegisterSuccess = true;
        draft.commonPostRegisterRequest = false;
        draft.commonPostRegisterFailure = null;
        draft.PostContent = action.data;
        break;
      case COMMON_POST_REGISTER_REQUEST:
        draft.commonPostRegisterSuccess = false;
        draft.commonPostRegisterRequest = true;
        draft.commonPostRegisterFailure = null;
        break;
      case COMMON_POST_REGISTER_FAILURE:
        draft.commonPostRegisterSuccess = false;
        draft.commonPostRegisterRequest = false;
        draft.commonPostRegisterFailure = action.error;
        break;
      case MY_POST_LIST_REQUEST:
        draft.myPostListSuccess = true;
        draft.myPostListRequest = false;
        draft.myPostListFailure = null;
        break;
      case MY_POST_LIST_SUCCESS:
        draft.myPostListSuccess = true;
        draft.myPostListRequest = false;
        draft.myPostListFailure = null;
        draft.MyPostList = action.data;
        break;
      case MY_POST_LIST_FAILURE:
        draft.myPostListSuccess = false;
        draft.myPostListRequest = false;
        draft.myPostListFailure = action.error;
        break;
      case COMMON_POST_LIKE_REQUEST:
        draft.commonPostLikeRequest = true;
        draft.commonPostLikeSuccess = false;
        draft.commonPostLikeFailure = null;
        break;
      case COMMON_POST_LIKE_SUCCESS:
        draft.commonPostLikeRequest = false;
        draft.commonPostLikeSuccess = true;
        draft.commonPostLikeFailure = null;
        draft.LikeCounts = action.data;
        break;
      case COMMON_POST_LIKE_FAILURE:
        draft.commonPostLikeRequest = false;
        draft.commonPostLikeSuccess = false;
        draft.commonPostLikeFailure = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
