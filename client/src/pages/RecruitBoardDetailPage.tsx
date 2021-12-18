import React from 'react';
import RecruitPostDetail from '@components/RecruitPostDetail/index';
import { PageWrapper, PageTitle, PageBackground } from '@assets/styles/page';
import Footer from '@components/Footer/index';

function RecruitBoardDetailPage(): JSX.Element {
  return (
    <PageBackground>
      <PageWrapper>
        <PageTitle>스터디 모집 게시판</PageTitle>
        <RecruitPostDetail />
      </PageWrapper>
      <Footer />
    </PageBackground>
  );
}
export default RecruitBoardDetailPage;
