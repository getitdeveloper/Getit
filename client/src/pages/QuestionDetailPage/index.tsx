import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SubHeader from '../../Components/Commons/SubHeader/SubHeader';
import { PageBackground, PageContainer, PageTitle } from '../../styles/page';
import { COMMON_POST_REQUEST, COMMENT_REQUEST } from '../../reducers/actions';
import PostDetail from '../../Components/PostDetail';
import Comments from '../../Components/Comments';
import LoadingSpinner from '../../Components/LoadingSpinner';

function QuestionDetailPage(props: any) {
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
      <SubHeader />
      <PageBackground>
        <PageTitle>질문 게시판</PageTitle>
        <PostDetail post={questionPost} />

        <div>
          <span>
            <ChatBubbleOutlineIcon />
            쪽지보내기
          </span>
          <span>
            <img src='/icons/like.svg' alt='like-button' />
            좋아요
          </span>
        </div>
        <Comments boardId={contentId} />
      </PageBackground>
    </div>
  );
}

export default QuestionDetailPage;
