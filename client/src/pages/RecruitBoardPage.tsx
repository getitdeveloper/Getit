import React from 'react';
import PostSubHeader from '@components/PostSubHeader';
import RecruitPost from '@components/RecruitPost/index';
import { PageBackground, PageWrapper } from '@assets/styles/page';
import Footer from '@components/Footer/index';

function RecruitBoardPage(): JSX.Element {
  return (
    <PageBackground>
      <PostSubHeader boardType='Recruit' />
      <PageWrapper>
        <RecruitPost />
      </PageWrapper>
      <Footer />
    </PageBackground>
  );
}

export default RecruitBoardPage;
