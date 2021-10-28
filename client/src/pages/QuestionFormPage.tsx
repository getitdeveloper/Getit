import * as React from 'react';
import PostForm from '@components/PostForm';
import { PageWrapper, PageTitle, PageBackground } from '@assets/styles/page';

function QuestionFormPage(): JSX.Element {
  return (
    <PageBackground>
      <PageWrapper>
        <PageTitle>질문게시글 작성</PageTitle>
        <PostForm />
      </PageWrapper>
    </PageBackground>
  );
}

export default QuestionFormPage;
