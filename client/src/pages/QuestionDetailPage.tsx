import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PostReactions from '@components/PostReactions';
import { PageBackground, PageContainer, PageTitle } from '@assets/styles/page';
import { COMMON_POST_REQUEST, COMMENT_REQUEST } from '@reducers/actions';
import PostDetail from '@components/PostDetail';
import Comments from '@components/Comments';
import LoadingSpinner from '@components/LoadingSpinner';

function QuestionDetailPage(props: any): JSX.Element {
  const { history } = props;
  const contentId = history.location.state;
  const dispatch = useDispatch();
  const questionPost = useSelector(
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

  if (!questionPost) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <PageBackground>
        <PageTitle>질문 게시판</PageTitle>
        <PostDetail post={questionPost} />

        <PostReactions />
        <Comments boardId={contentId} />
      </PageBackground>
    </div>
  );
}

export default QuestionDetailPage;
