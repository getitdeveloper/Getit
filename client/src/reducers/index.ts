import { combineReducers } from 'redux';

import user from './user';
import postList from './postList';
import comment from './comment';
import commentList from './commentList';
import post from './post';

const reducer = combineReducers({
  user,
  post,
  postList,
  comment,
  commentList,
});

// export type RootState = ReturnType<typeof reducer>;

export default reducer;
