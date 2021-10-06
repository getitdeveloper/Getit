import * as React from 'react';
import PostSubHeader from '@components/PostSubHeader';
import RecruitPost from '@components/RecruitPost/index';
import { PageBackground } from '@assets/styles/page';

function RecruitBoardPage(): JSX.Element {
  return (
    <PageBackground>
      <PostSubHeader boardType='Recruit' />
      <RecruitPost />
    </PageBackground>
  );
}

export default RecruitBoardPage;
