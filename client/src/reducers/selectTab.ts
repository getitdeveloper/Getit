import produce from 'immer';
import { InitialState, ISelectTabActions } from '@reducers/selectTabTypes';
import { SELECT_TAB } from '@reducers/actions';

// 초기 상태
const initialState: InitialState = {
  selectTab: 0,
};

const reducer = (
  state = initialState,
  action: ISelectTabActions,
): InitialState =>
  produce(state, (draft) => {
    switch (action.type) {
      case SELECT_TAB:
        draft.selectTab = action.data;
        break;
      default:
        return state;
    }
  });

export default reducer;
