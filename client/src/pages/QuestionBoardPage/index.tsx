import * as React from 'react';
import PostItem from '../../Components/PostItem';
import PostSubHeader from '../../Components/PostSubHeader';
import { PageContainer, PageBackground } from '../../styles/page';
import { dummyData } from '../FreeBoardPage/dummyData';

function QuestionBardPage() {
  return (
    <PageBackground>
      <PostSubHeader boardType='Question' />
      <PageContainer>
        {dummyData.map((content) => (
          <PostItem key={content.id} content={content} boardType='Question' />
        ))}
      </PageContainer>
    </PageBackground>
  );
}

export default QuestionBardPage;
