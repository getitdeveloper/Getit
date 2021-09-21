import * as React from 'react';
import PostSubHeader from '@components/PostSubHeader';
import RecruitPost from '@components/RecruitPost/index';
import { ISelectTab } from '@types';

function RecruitBoardPage({ selectTab }: ISelectTab): JSX.Element {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <PostSubHeader boardType='Recruit' selectTab={selectTab} />
      <RecruitPost />
    </div>
  );
}

export default RecruitBoardPage;
