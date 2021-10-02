import * as React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PostItem from '@components/PostItem';
import { MY_POST_LIST_REQUEST } from '@reducers/actions';
import { IPost } from '@types';
import LoadingSpinner from '@components/LoadingSpinner';
import MemberType from '@components/RecruitMembers/index';
import { ProfileRight, PostWrapper, TagWrapper, PostTitle } from './styles';

function MyPosts() {
  const history = useHistory();
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = user.profileInfo?.user_pk;
  const myPosts = useSelector(
    (state: RootStateOrAny) => state.postList.myPostList,
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

  const onHandlePost = (postId: number, category: string) =>
    history.push(`/${category}Board/${postId}`);

  if (!myPosts) {
    return <LoadingSpinner />;
  }

  console.log(myPosts);
  return (
    <ProfileRight>
      {myPosts.map((content: IPost) => (
        <PostWrapper
          key={content.id}
          onClick={() => onHandlePost(content.id, content.category)}
        >
          <PostItem content={content} />
          {/* <TagWrapper>
            {content.worker.map((workerType: string) => (
              <MemberType key={workerType} member={workerType} />
            ))}
          </TagWrapper>
          <PostTitle>{content.title}</PostTitle> */}
        </PostWrapper>
      ))}
    </ProfileRight>
  );
}
export default MyPosts;
