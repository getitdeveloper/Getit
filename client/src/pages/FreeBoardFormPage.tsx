import * as React from 'react';
import PostForm from '@components/PostForm';
import { PageBackground, PageContainer, PageTitle } from '@assets/styles/page';

function FreeBoardFormPage(): JSX.Element {
  // todo user_pk가 null일 경우 main page로 이동

  return (
    <div>
      <PageBackground>
        <PageTitle>자유 게시판 글 작성</PageTitle>
        <PageContainer width='80%' padding='3%'>
          <PostForm />
        </PageContainer>
      </PageBackground>
    </div>
  );
}

export default FreeBoardFormPage;
