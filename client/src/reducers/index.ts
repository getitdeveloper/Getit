import { combineReducers } from 'redux';

import user from './user';
import board from './board';

const reducer = combineReducers({
  user,
  board,
});

// export type RootState = ReturnType<typeof reducer>;

export default reducer;
