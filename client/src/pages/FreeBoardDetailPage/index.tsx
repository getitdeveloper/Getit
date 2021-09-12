import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { PageBackground, PageContainer, PageTitle } from '../../styles/page';
import { COMMON_POST_REQUEST } from '../../reducers/actions';
import PostDetail from '../../Components/PostDetail';

function FreeBoardDetailPage(props: any) {
  const { history } = props;
  const contentId = history.location.state;
  const dispatch = useDispatch();
  const freePost = useSelector(
    (state: RootStateOrAny) => state.board.PostContent,
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
    return <CircularProgress />;
  }
  return (
    <div>
      <PageBackground>
        <PageTitle>자유 게시판</PageTitle>
        <PostDetail post={freePost} />

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
        <PageContainer width='80%'>
          <p>댓글</p>
        </PageContainer>
      </PageBackground>
    </div>
  );
}

export default FreeBoardDetailPage;
