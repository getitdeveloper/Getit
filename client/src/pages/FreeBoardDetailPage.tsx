import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { PageBackground, PageContainer, PageTitle } from '@assets/styles/page';
import { COMMON_POST_REQUEST } from '@reducers/actions';
import PostDetail from '@components/PostDetail';
import Comments from '@components/Comments';
import LoadingSpinner from '@components/LoadingSpinner';
import LikeImg from '@assets/icons/like.svg';

function FreeBoardDetailPage(props: any) {
  const { history } = props;
  const contentId = history.location.state;
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
            <img src={LikeImg} alt='like-button' />
            좋아요
          </span>
        </div>

        <Comments boardId={contentId} />
      </PageBackground>
    </div>
  );
}

export default FreeBoardDetailPage;
