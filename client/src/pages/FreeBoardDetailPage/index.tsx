import * as React from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SubHeader from '../../Components/Commons/SubHeader/SubHeader';
import { PageBackground, PageContainer, PageTitle } from '../../styles/page';
import { dummyData } from '../FreeBoardPage/dummyData';
import PostItem from '../../Components/PostItem';
import MarkdownRenderer from '../../Components/MarkdownRenderer';

function FreeBoardDetailPage(props: any) {
  const { history } = props;
  const contentId = history.location.state;
  return (
    <div>
      <SubHeader />
      <PageBackground>
        <PageTitle>자유 게시판</PageTitle>
        <PageContainer width='80%'>
          <PostItem content={dummyData[contentId]} />
          <MarkdownRenderer text={dummyData[contentId].text} open />
        </PageContainer>
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
