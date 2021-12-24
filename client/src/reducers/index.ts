import { combineReducers } from 'redux';

import profile from '@reducers/profile';
import user from '@reducers/user';
import postList from '@reducers/postList';
import comment from '@reducers/comment';
import commentList from '@reducers/commentList';
import post from '@reducers/post';
import navbarTab from '@reducers/selectTab';

const reducer = combineReducers({
  user,
  post,
  postList,
  comment,
  commentList,
  profile,
  navbarTab,
});

export default reducer;
