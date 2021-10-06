import * as React from 'react';
import PostForm from '@components/PostForm';
import { PageContainer1, FormContainer, PageTitle } from '@assets/styles/page';

function FreeBoardFormPage(): JSX.Element {
  // todo user_pk가 null일 경우 main page로 이동

  return (
    <PageContainer1>
      <PageTitle>자유 게시글 작성</PageTitle>
      <FormContainer width='80%' padding='3%'>
        <PostForm />
      </FormContainer>
    </PageContainer1>
  );
}

export default FreeBoardFormPage;
