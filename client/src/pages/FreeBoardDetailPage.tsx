import * as React from 'react';
import { useParams } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { PageBackground, PageTitle } from '@assets/styles/page';
import { COMMON_POST_REQUEST } from '@reducers/actions';
import PostDetail from '@components/PostDetail';
import Comments from '@components/Comments';
import LoadingSpinner from '@components/LoadingSpinner';
import PostReactions from '@components/PostReactions';
import { IPostId } from '@types';

function FreeBoardDetailPage(): JSX.Element {
  const dispatch = useDispatch();
  const { postId }: IPostId = useParams();
  const freePost = useSelector(
    (state: RootStateOrAny) => state.board.postContent,
  );

  React.useEffect(() => {
    dispatch({
      type: COMMON_POST_REQUEST,
      data: {
        id: postId,
      },
    });
  }, []);

  if (!freePost) {
    return <LoadingSpinner />;
  }
  console.log('freePost: ', freePost);
  return (
    <PageBackground>
      <PageTitle>자유 게시판</PageTitle>
      <PostDetail post={freePost} />
      <PostReactions />
      <Comments boardId={postId} />
    </PageBackground>
  );
}

export default FreeBoardDetailPage;
