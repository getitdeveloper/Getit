import * as React from 'react';
import PostSubHeader from '@components/PostSubHeader';
import RecruitPost from '@components/RecruitPost/index';

function RecruitBoardPage(): JSX.Element {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <PostSubHeader boardType='Recruit' />
      <RecruitPost />
    </div>
  );
}

export default RecruitBoardPage;
