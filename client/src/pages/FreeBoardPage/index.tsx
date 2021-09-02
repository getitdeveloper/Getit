import * as React from 'react';
import PostItem from '../../Components/PostItem';
import PostSubHeader from '../../Components/PostSubHeader';
import { PageContainer, PageBackground } from '../../styles/page';
import { dummyData } from './dummyData';

function FreeBoardPage() {
  return (
    <PageBackground>
      <PostSubHeader boardType='Free' />
      <PageContainer>
        {dummyData.map((content) => (
          <PostItem key={content.id} content={content} boardType='Free' />
        ))}
      </PageContainer>
    </PageBackground>
  );
}

export default FreeBoardPage;
