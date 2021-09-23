import * as React from 'react';

import PostForm from '@components/PostForm';
import { PageBackground, PageContainer, PageTitle } from '@assets/styles/page';

function QuestionFormPage() {
  return (
    <PageBackground>
      <PageTitle>질문게시글 작성</PageTitle>
      <PageContainer width='80%' padding='3%'>
        <PostForm />
      </PageContainer>
    </PageBackground>
  );
}

export default QuestionFormPage;
