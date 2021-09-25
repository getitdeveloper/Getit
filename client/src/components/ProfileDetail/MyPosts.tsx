import * as React from 'react';
import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { MY_POST_LIST_REQUEST } from '../../reducers/actions';
import { ProfileRight, PostWrapper } from './styles';
import PostItem from '../PostItem';
import { IPost } from '../../types';
import LoadingSpinner from '../LoadingSpinner';

function MyPosts() {
  const userId = useSelector((state: RootStateOrAny) => state.user.id.user_pk);
  const myPosts = useSelector(
    (state: RootStateOrAny) => state.board.myPostList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: MY_POST_LIST_REQUEST,
      data: {
        user: userId,
      },
    });
  }, []);
  if (!myPosts) {
    return <LoadingSpinner />;
  }
  return (
    <ProfileRight>
      <p> 내가 쓴 글 </p>
      {myPosts.map((content: IPost) => (
        <PostWrapper key={content.id}>
          <PostItem content={content} detail />
        </PostWrapper>
      ))}
    </ProfileRight>
  );
}
export default MyPosts;
