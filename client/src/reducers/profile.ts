import produce from 'immer';
import {
  InitialState,
  IMyProfileSelectMenuAction,
} from '@reducers/profileTypes';
import { MY_PROFILE_SELECT_MENU } from '@reducers/actions';

// 초기 상태
const initialState: InitialState = {
  selectMenu: {
    selected: 0,
    toggle: false,
  },
};

const reducer = (
  state = initialState,
  action: IMyProfileSelectMenuAction,
): InitialState =>
  produce(state, (draft) => {
    switch (action.type) {
      case MY_PROFILE_SELECT_MENU:
        draft.selectMenu = action.data;
        break;
      default:
        return state;
    }
  });

export default reducer;
