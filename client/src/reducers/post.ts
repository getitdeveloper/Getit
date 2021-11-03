import produce from 'immer';
import { InitialState, PostActions } from './postTypes';
import {
  COMMON_POST_REQUEST,
  COMMON_POST_SUCCESS,
  COMMON_POST_FAILURE,
  COMMON_POST_REGISTER_REQUEST,
  COMMON_POST_REGISTER_SUCCESS,
  COMMON_POST_REGISTER_FAILURE,
  COMMON_POST_LIKE_REQUEST,
  COMMON_POST_LIKE_SUCCESS,
  COMMON_POST_LIKE_FAILURE,
  RECRUIT_POST_REQUEST,
  RECRUIT_POST_SUCCESS,
  RECRUIT_POST_FAILURE,
  TEAM_PROFILE_REGISTER_REQUEST,
  TEAM_PROFILE_REGISTER_SUCCESS,
  TEAM_PROFILE_REGISTER_FAILURE,
  RECRUIT_POSTING_REQUEST,
  RECRUIT_POSTING_SUCCESS,
  RECRUIT_POSTING_FAILURE,
  TEAM_PROFILE_REMOVE_REQUEST,
  TEAM_PROFILE_REMOVE_SUCCESS,
  TEAM_PROFILE_REMOVE_FAILURE,
} from './actions';

// 초기 상태
const initialState: InitialState = {
  commonPost: null,
  likeCounts: null,
  recruitPost: null,
  commonPostRequest: false,
  commonPostSuccess: false,
  commonPostFailure: null,
  commonPostRegisterRequest: false,
  commonPostRegisterSuccess: false,
  commonPostRegisterFailure: null,
  commonPostLikeRequest: false,
  commonPostLikeSuccess: false,
  commonPostLikeFailure: null,
  recruitPostRequest: false,
  recruitPostSuccess: false,
  recruitPostFailure: null,
  recruitPostingRequest: false,
  recruitPostingSuccess: false,
  recruitPostingFailure: null,
  teamProfileRegisterRequest: false,
  teamProfileRegisterSuccess: false,
  teamProfileRegisterFailure: null,
  teamProfileRemoveRequest: false,
  teamProfileRemoveSuccess: false,
  teamProfileRemoveFailure: null,
};

const reducer = (state = initialState, action: PostActions): InitialState =>
  produce(state, (draft) => {
    switch (action.type) {
      case COMMON_POST_REQUEST:
        draft.commonPostRequest = true;
        draft.commonPostSuccess = false;
        draft.commonPostFailure = null;
        break;
      case COMMON_POST_SUCCESS:
        draft.commonPostRequest = false;
        draft.commonPostSuccess = true;
        draft.commonPostFailure = null;
        draft.commonPost = action.data;
        break;
      case COMMON_POST_FAILURE:
        draft.commonPostRequest = false;
        draft.commonPostSuccess = false;
        draft.commonPostFailure = action.error;
        break;
      case COMMON_POST_REGISTER_REQUEST:
        draft.commonPostRegisterRequest = true;
        draft.commonPostRegisterSuccess = false;
        draft.commonPostRegisterFailure = null;
        break;
      case COMMON_POST_REGISTER_SUCCESS:
        draft.commonPostRegisterRequest = false;
        draft.commonPostRegisterSuccess = true;
        draft.commonPostRegisterFailure = null;
        draft.commonPost = action.data;
        break;
      case COMMON_POST_REGISTER_FAILURE:
        draft.commonPostRegisterRequest = false;
        draft.commonPostRegisterSuccess = false;
        draft.commonPostRegisterFailure = action.error;
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
        draft.likeCounts = action.data;
        break;
      case COMMON_POST_LIKE_FAILURE:
        draft.commonPostLikeRequest = false;
        draft.commonPostLikeSuccess = false;
        draft.commonPostLikeFailure = action.error;
        break;
      case RECRUIT_POST_REQUEST:
        draft.recruitPostRequest = true;
        draft.recruitPostSuccess = false;
        draft.recruitPostFailure = null;
        break;
      case RECRUIT_POST_SUCCESS:
        draft.recruitPostRequest = false;
        draft.recruitPostSuccess = true;
        draft.recruitPostFailure = null;
        draft.recruitPost = action.data;
        break;
      case RECRUIT_POST_FAILURE:
        draft.recruitPostRequest = false;
        draft.recruitPostSuccess = false;
        draft.recruitPostFailure = action.error;
        break;
      case RECRUIT_POSTING_REQUEST:
        draft.recruitPostingRequest = true;
        draft.recruitPostingSuccess = false;
        draft.recruitPostingFailure = null;
        break;
      case RECRUIT_POSTING_SUCCESS:
        draft.recruitPostingRequest = false;
        draft.recruitPostingSuccess = true;
        draft.recruitPostingFailure = null;
        break;
      case RECRUIT_POSTING_FAILURE:
        draft.recruitPostingRequest = false;
        draft.recruitPostingSuccess = false;
        draft.recruitPostingFailure = action.error;
        break;
      case TEAM_PROFILE_REGISTER_REQUEST:
        draft.teamProfileRegisterRequest = true;
        draft.teamProfileRegisterSuccess = false;
        draft.teamProfileRegisterFailure = null;
        break;
      case TEAM_PROFILE_REGISTER_SUCCESS:
        draft.teamProfileRegisterRequest = false;
        draft.teamProfileRegisterSuccess = true;
        draft.teamProfileRegisterFailure = null;
        break;
      case TEAM_PROFILE_REGISTER_FAILURE:
        draft.teamProfileRegisterRequest = false;
        draft.teamProfileRegisterSuccess = false;
        draft.teamProfileRegisterFailure = action.error;
        break;
      case TEAM_PROFILE_REMOVE_REQUEST:
        draft.teamProfileRemoveRequest = true;
        draft.teamProfileRemoveSuccess = false;
        draft.teamProfileRemoveFailure = null;
        break;
      case TEAM_PROFILE_REMOVE_SUCCESS:
        draft.teamProfileRemoveRequest = false;
        draft.teamProfileRemoveSuccess = true;
        draft.teamProfileRemoveFailure = null;
        break;
      case TEAM_PROFILE_REMOVE_FAILURE:
        draft.teamProfileRemoveRequest = false;
        draft.teamProfileRemoveSuccess = false;
        draft.teamProfileRemoveFailure = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
