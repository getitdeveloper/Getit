import * as React from 'react';
import { useParams } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PostReactions from '@components/PostReactions';
import { PageBackground, PageContainer, PageTitle } from '@assets/styles/page';
import { COMMON_POST_REQUEST, COMMENT_REQUEST } from '@reducers/actions';
import PostDetail from '@components/PostDetail';
import Comments from '@components/Comments';
import LoadingSpinner from '@components/LoadingSpinner';
import { IPostId } from '@types';

function QuestionDetailPage(): JSX.Element {
  const dispatch = useDispatch();
  const { postId }: IPostId = useParams();
  const questionPost = useSelector(
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

  if (!questionPost) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <PageBackground>
        <PageTitle>질문 게시판</PageTitle>
        <PostDetail post={questionPost} />

        <PostReactions />
        <Comments boardId={postId} />
      </PageBackground>
    </div>
  );
}

export default QuestionDetailPage;
