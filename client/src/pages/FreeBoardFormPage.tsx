import React from 'react';
import PostForm from '@components/PostForm';
import { PageBackground, PageWrapper, PageTitle } from '@assets/styles/page';
import Footer from '@components/Footer/index';

function FreeBoardFormPage(): JSX.Element {
  // todo user_pk가 null일 경우 main page로 이동

  return (
    <PageBackground>
      <PageWrapper>
        <PageTitle>자유 게시글 작성</PageTitle>
        <PostForm />
      </PageWrapper>
      <Footer />
    </PageBackground>
  );
}

export default FreeBoardFormPage;
