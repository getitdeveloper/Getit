import * as React from 'react';
import RecruitPostDetail from '@components/RecruitPostDetail/index';
import { PageContainer1, PageTitle, PageBackground } from '@assets/styles/page';

function RecruitBoardDetailPage(): JSX.Element {
  return (
    <PageBackground>
      <PageContainer1>
        <PageTitle>스터디 모집 게시판</PageTitle>
        <RecruitPostDetail />
      </PageContainer1>
    </PageBackground>
  );
}
export default RecruitBoardDetailPage;
