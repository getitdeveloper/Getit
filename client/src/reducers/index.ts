import { combineReducers } from 'redux';

import user from './user';
import board from './board';
import comment from './comment';

const reducer = combineReducers({
  user,
  board,
  comment,
});

// export type RootState = ReturnType<typeof reducer>;

export default reducer;
