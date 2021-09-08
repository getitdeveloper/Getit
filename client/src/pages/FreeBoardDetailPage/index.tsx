import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SubHeader from '../../Components/Commons/SubHeader/SubHeader';
import { PageBackground, PageContainer, PageTitle } from '../../styles/page';
import PostItem from '../../Components/PostItem';
import MarkdownRenderer from '../../Components/MarkdownRenderer';
import { COMMON_POST_REQUEST } from '../../reducers/actions';

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

  return (
    <div>
      <SubHeader />
      <PageBackground>
        <PageTitle>자유 게시판</PageTitle>
        {freePost && (
          <PageContainer width='80%'>
            <PostItem content={freePost} />
            <MarkdownRenderer text={freePost.content} open />
          </PageContainer>
        )}

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
