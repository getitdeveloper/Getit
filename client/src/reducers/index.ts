import { combineReducers } from 'redux';

import profile from '@reducers/profile';
import user from '@reducers/user';
import postList from '@reducers/postList';
import comment from '@reducers/comment';
import commentList from '@reducers/commentList';
import post from '@reducers/post';

const reducer = combineReducers({
  user,
  post,
  postList,
  comment,
  commentList,
  profile,
});

export default reducer;
