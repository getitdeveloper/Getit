import * as React from 'react';

import PostForm from '@components/PostForm';
import { PageContainer1, FormContainer, PageTitle } from '@assets/styles/page';

function QuestionFormPage() {
  return (
    <PageContainer1>
      <PageTitle>질문게시글 작성</PageTitle>
      <FormContainer width='100%' padding='3%'>
        <PostForm />
      </FormContainer>
    </PageContainer1>
  );
}

export default QuestionFormPage;
