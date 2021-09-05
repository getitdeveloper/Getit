import produce from 'immer';
import { InitialState, BoardActions } from './board-types';
import {
  FREE_BOARD_SUCCESS,
  FREE_BOARD_FAILURE,
  FREE_BOARD_REQUEST,
  FREE_POST_SUCCESS,
  FREE_POST_FAILURE,
  FREE_POST_REQUEST,
  FREE_POST_REGISTER_REQUEST,
  FREE_POST_REGISTER_FAILURE,
  FREE_POST_REGISTER_SUCCESS,
  // QUESTION_BOARD_SUCCESS,
  // QUESTION_BOARD_REQUEST,
  // QUESTION_BOARD_FAILURE,
  // QUESTION_POST_REQUEST,
  // QUESTION_POST_FAILURE,
  // QUESTION_POST_SUCCESS,
  // QUESTION_POST_REGISTER_REQUEST,
  // QUESTION_POST_REGISTER_FAILURE,
  // QUESTION_POST_REGISTER_SUCCESS,
} from './actions';

// 초기 상태
const initialState: InitialState = {
  freePost: null,
  freeBoard: null,
  freePostRequest: false,
  freePostSuccess: false,
  freePostFailure: null,
  freePostRegisterRequest: false,
  freePostRegisterSuccess: false,
  freePostRegisterFailure: null,
  freeBoardRequest: false,
  freeBoardSuccess: false,
  freeBoardFailure: null,
};

const reducer = (state = initialState, action: BoardActions): InitialState =>
  produce(state, (draft) => {
    switch (action.type) {
      case FREE_BOARD_SUCCESS:
        draft.freeBoardRequest = false;
        draft.freeBoardSuccess = true;
        draft.freeBoardFailure = null;
        draft.freeBoard = action.data;
        break;
      case FREE_BOARD_REQUEST:
        draft.freeBoardRequest = true;
        draft.freeBoardSuccess = false;
        draft.freeBoardFailure = null;
        break;
      case FREE_BOARD_FAILURE:
        draft.freeBoardRequest = false;
        draft.freeBoardSuccess = false;
        draft.freeBoardFailure = action.error;
        break;
      case FREE_POST_REQUEST:
        draft.freePostSuccess = false;
        draft.freePostRequest = true;
        draft.freePostFailure = null;
        break;
      case FREE_POST_SUCCESS:
        draft.freePostSuccess = true;
        draft.freePostRequest = false;
        draft.freePostFailure = null;
        draft.freePost = action.data;
        break;
      case FREE_POST_FAILURE:
        draft.freePostSuccess = false;
        draft.freePostRequest = false;
        draft.freePostFailure = action.error;
        break;
      case FREE_POST_REGISTER_SUCCESS:
        draft.freePostRegisterSuccess = true;
        draft.freePostRegisterRequest = false;
        draft.freePostRegisterFailure = null;
        draft.freePost = action.data;
        break;
      case FREE_POST_REGISTER_REQUEST:
        draft.freePostRegisterSuccess = false;
        draft.freePostRegisterRequest = true;
        draft.freePostRegisterFailure = null;
        break;
      case FREE_POST_REGISTER_FAILURE:
        draft.freePostRegisterSuccess = false;
        draft.freePostRegisterRequest = false;
        draft.freePostRegisterFailure = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
