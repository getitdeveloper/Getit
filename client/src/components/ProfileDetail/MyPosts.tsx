import * as React from 'react';
import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { MY_POST_LIST_REQUEST } from '@reducers/actions';
import { IPost } from '@types';
import LoadingSpinner from '@components/LoadingSpinner';
import MemberType from '@components/RecruitMembers/index';
import { ProfileRight, PostWrapper, TagWrapper, PostTitle } from './styles';

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
      {myPosts.map((content: IPost) => (
        <PostWrapper key={content.id}>
          <TagWrapper>
            {content.worker.map((workerType: string) => (
              <MemberType key={workerType} member={workerType} />
            ))}
          </TagWrapper>
          <PostTitle>{content.title}</PostTitle>
        </PostWrapper>
      ))}
    </ProfileRight>
  );
}
export default MyPosts;
