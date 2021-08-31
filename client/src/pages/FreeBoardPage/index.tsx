import * as React from 'react';
import PostItem from '../../Components/PostItem';
import { PageContainer, PageBackground } from '../../styles/page';
import { dummyData } from './dummyData';

function FreeBoardPage() {
  return (
    <PageBackground>
      <PageContainer>
        {dummyData.map((content) => (
          <PostItem key={content.id} content={content} />
        ))}
      </PageContainer>
    </PageBackground>
  );
}

export default FreeBoardPage;
