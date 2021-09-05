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
  QUESTION_BOARD_SUCCESS,
  QUESTION_BOARD_REQUEST,
  QUESTION_BOARD_FAILURE,
  QUESTION_POST_REQUEST,
  QUESTION_POST_FAILURE,
  QUESTION_POST_SUCCESS,
  QUESTION_POST_REGISTER_REQUEST,
  QUESTION_POST_REGISTER_FAILURE,
  QUESTION_POST_REGISTER_SUCCESS,
} from './actions';

// 초기 상태
const initialState: InitialState = {
  freePost: null,
  freeBoard: null,
  questionPost: null,
  questionBoard: null,
  freePostRequest: false,
  freePostSuccess: false,
  freePostFailure: null,
  freePostRegisterRequest: false,
  freePostRegisterSuccess: false,
  freePostRegisterFailure: null,
  freeBoardRequest: false,
  freeBoardSuccess: false,
  freeBoardFailure: null,
  questionPostRequest: false,
  questionPostSuccess: false,
  questionPostFailure: null,
  questionPostRegisterRequest: false,
  questionPostRegisterSuccess: false,
  questionPostRegisterFailure: null,
  questionBoardRequest: false,
  questionBoardSuccess: false,
  questionBoardFailure: null,
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
      case QUESTION_BOARD_SUCCESS:
        draft.freeBoardRequest = false;
        draft.freeBoardSuccess = true;
        draft.freeBoardFailure = null;
        draft.freeBoard = action.data;
        break;
      case QUESTION_BOARD_REQUEST:
        draft.questionBoardRequest = true;
        draft.questionBoardSuccess = false;
        draft.questionBoardFailure = null;
        break;
      case QUESTION_BOARD_FAILURE:
        draft.questionBoardRequest = false;
        draft.questionBoardSuccess = false;
        draft.questionBoardFailure = action.error;
        break;
      case QUESTION_POST_REQUEST:
        draft.questionPostSuccess = false;
        draft.questionPostRequest = true;
        draft.questionPostFailure = null;
        break;
      case QUESTION_POST_SUCCESS:
        draft.questionPostSuccess = true;
        draft.questionPostRequest = false;
        draft.questionPostFailure = null;
        draft.questionPost = action.data;
        break;
      case QUESTION_POST_FAILURE:
        draft.questionPostSuccess = false;
        draft.questionPostRequest = false;
        draft.questionPostFailure = action.error;
        break;
      case QUESTION_POST_REGISTER_SUCCESS:
        draft.questionPostRegisterSuccess = true;
        draft.questionPostRegisterRequest = false;
        draft.questionPostRegisterFailure = null;
        draft.questionPost = action.data;
        break;
      case QUESTION_POST_REGISTER_REQUEST:
        draft.questionPostRegisterSuccess = false;
        draft.questionPostRegisterRequest = true;
        draft.questionPostRegisterFailure = null;
        break;
      case QUESTION_POST_REGISTER_FAILURE:
        draft.questionPostRegisterSuccess = false;
        draft.questionPostRegisterRequest = false;
        draft.questionPostRegisterFailure = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
