import * as React from 'react';

import PostForm from '@components/PostForm';
import { PageWrapper, BlockWrapper, PageTitle } from '@assets/styles/page';

function QuestionFormPage() {
  return (
    <PageWrapper>
      <PageTitle>질문게시글 작성</PageTitle>
      <BlockWrapper padding='3%'>
        <PostForm />
      </BlockWrapper>
    </PageWrapper>
  );
}

export default QuestionFormPage;
