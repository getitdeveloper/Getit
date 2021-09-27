import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { PageBackground, PageTitle } from '@assets/styles/page';
import { COMMON_POST_REQUEST } from '@reducers/actions';
import PostDetail from '@components/PostDetail';
import Comments from '@components/Comments';
import LoadingSpinner from '@components/LoadingSpinner';
import PostReactions from '@components/PostReactions';

function FreeBoardDetailPage(props: any): JSX.Element {
  const { match } = props;
  const contentId = match.params.id;
  const dispatch = useDispatch();
  const freePost = useSelector(
    (state: RootStateOrAny) => state.board.postContent,
  );

  React.useEffect(() => {
    dispatch({
      type: COMMON_POST_REQUEST,
      data: {
        id: contentId,
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
      <Comments boardId={contentId} />
    </PageBackground>
  );
}

export default FreeBoardDetailPage;
