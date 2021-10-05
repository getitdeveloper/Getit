import * as React from 'react';
import PostSubHeader from '@components/PostSubHeader';
import RecruitPost from '@components/RecruitPost/index';
import { PageWrapper } from '@assets/styles/page';

function RecruitBoardPage(): JSX.Element {
  return (
    <PageWrapper>
      <PostSubHeader boardType='Recruit' />
      <RecruitPost />
    </PageWrapper>
  );
}

export default RecruitBoardPage;
