import * as React from 'react';
import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { LIKED_POST_LIST_REQUEST } from '@reducers/actions';
import PostItem from '@components/PostItem';
import { ILikedPost, IPost } from '@types';
import LoadingSpinner from '@components/LoadingSpinner';
import { ProfileRight, PostWrapper } from './styles';

function LikedPosts(): JSX.Element {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = user.profileInfo?.user_pk;
  const likedPosts = useSelector(
    (state: RootStateOrAny) => state.postList.likedPostList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LIKED_POST_LIST_REQUEST,
      data: {
        user: userId,
      },
    });
  }, []);
  if (!likedPosts) {
    return <LoadingSpinner />;
  }
  return (
    <ProfileRight>
      {likedPosts.map((content: ILikedPost) => (
        <PostWrapper key={content.commonpost.id}>
          <PostItem content={content.commonpost} />
        </PostWrapper>
      ))}
    </ProfileRight>
  );
}

export default LikedPosts;
