import produce from 'immer';
import { InitialState, PostListActions } from './postListTypes';
import {
  COMMON_POST_LIST_REQUEST,
  COMMON_POST_LIST_SUCCESS,
  COMMON_POST_LIST_FAILURE,
  MY_POST_LIST_REQUEST,
  MY_POST_LIST_SUCCESS,
  MY_POST_LIST_FAILURE,
  SEARCH_POST_LIST_REQUEST,
  SEARCH_POST_LIST_SUCCESS,
  SEARCH_POST_LIST_FAILURE,
  LIKED_POST_LIST_REQUEST,
  LIKED_POST_LIST_SUCCESS,
  LIKED_POST_LIST_FAILURE,
  RECRUIT_POST_LIST_REQUEST,
  RECRUIT_POST_LIST_SUCCESS,
  RECRUIT_POST_LIST_FAILURE,
} from './actions';

// 초기 상태
const initialState: InitialState = {
  commonPostList: null,
  myPostList: null,
  likedPostList: null,
  searchPostList: null,
  recruitPostList: null,
  commonPostListRequest: false,
  commonPostListSuccess: false,
  commonPostListFailure: null,
  myPostListRequest: false,
  myPostListSuccess: false,
  myPostListFailure: null,
  searchPostListRequest: false,
  searchPostListSuccess: false,
  searchPostListFailure: null,
  likedPostListRequest: false,
  likedPostListSuccess: false,
  likedPostListFailure: null,
  recruitPostListRequest: false,
  recruitPostListSuccess: false,
  recruitPostListFailure: null,
};

const reducer = (state = initialState, action: PostListActions): InitialState =>
  produce(state, (draft) => {
    switch (action.type) {
      case COMMON_POST_LIST_REQUEST:
        draft.commonPostListRequest = true;
        draft.commonPostListSuccess = false;
        draft.commonPostListFailure = null;
        break;
      case COMMON_POST_LIST_SUCCESS:
        draft.commonPostListRequest = false;
        draft.commonPostListSuccess = true;
        draft.commonPostListFailure = null;
        draft.commonPostList = action.data;
        break;
      case COMMON_POST_LIST_FAILURE:
        draft.commonPostListRequest = false;
        draft.commonPostListSuccess = false;
        draft.commonPostListFailure = action.error;
        break;
      case MY_POST_LIST_REQUEST:
        draft.myPostListRequest = false;
        draft.myPostListSuccess = true;
        draft.myPostListFailure = null;
        break;
      case MY_POST_LIST_SUCCESS:
        draft.myPostListRequest = false;
        draft.myPostListSuccess = true;
        draft.myPostListFailure = null;
        draft.myPostList = action.data;
        break;
      case MY_POST_LIST_FAILURE:
        draft.myPostListRequest = false;
        draft.myPostListSuccess = false;
        draft.myPostListFailure = action.error;
        break;
      case SEARCH_POST_LIST_REQUEST:
        draft.searchPostListRequest = true;
        draft.searchPostListSuccess = false;
        draft.searchPostListFailure = null;
        break;
      case SEARCH_POST_LIST_SUCCESS:
        draft.searchPostListRequest = false;
        draft.searchPostListSuccess = true;
        draft.searchPostListFailure = null;
        draft.searchPostList = action.data;
        break;
      case SEARCH_POST_LIST_FAILURE:
        draft.searchPostListRequest = false;
        draft.searchPostListSuccess = false;
        draft.searchPostListFailure = action.error;
        break;
      case LIKED_POST_LIST_REQUEST:
        draft.likedPostListRequest = false;
        draft.likedPostListSuccess = true;
        draft.likedPostListFailure = null;
        break;
      case LIKED_POST_LIST_SUCCESS:
        draft.likedPostListRequest = false;
        draft.likedPostListSuccess = true;
        draft.likedPostListFailure = null;
        draft.likedPostList = action.data;
        break;
      case LIKED_POST_LIST_FAILURE:
        draft.likedPostListRequest = false;
        draft.likedPostListSuccess = false;
        draft.likedPostListFailure = action.error;
        break;
      case RECRUIT_POST_LIST_REQUEST:
        draft.recruitPostListRequest = true;
        draft.recruitPostListSuccess = false;
        draft.recruitPostListFailure = null;
        break;
      case RECRUIT_POST_LIST_SUCCESS:
        draft.recruitPostListRequest = false;
        draft.recruitPostListSuccess = true;
        draft.recruitPostListFailure = null;
        draft.recruitPostList = action.data;
        break;
      case RECRUIT_POST_LIST_FAILURE:
        draft.recruitPostListRequest = false;
        draft.recruitPostListSuccess = false;
        draft.recruitPostListFailure = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
