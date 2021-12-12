import * as React from 'react';
import PostForm from '@components/PostForm';
import { PageWrapper, PageTitle, PageBackground } from '@assets/styles/page';
import Footer from '@components/Footer/index';

function QuestionFormPage(): JSX.Element {
  return (
    <PageBackground>
      <PageWrapper>
        <PageTitle>질문게시글 작성</PageTitle>
        <PostForm />
      </PageWrapper>
      <Footer />
    </PageBackground>
  );
}

export default QuestionFormPage;
