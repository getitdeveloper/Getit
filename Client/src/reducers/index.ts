import { combineReducers } from 'redux';

import user from './user';

const reducer = combineReducers({
  user,
});

// export type RootState = ReturnType<typeof reducer>;

export default reducer;
