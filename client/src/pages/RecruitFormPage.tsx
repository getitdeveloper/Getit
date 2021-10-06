import * as React from 'react';
import PostForm from '@components/PostForm';
import { PageContainer1, FormContainer, PageTitle } from '@assets/styles/page';

function RecruitFormPage(): JSX.Element {
  return (
    <PageContainer1>
      <PageTitle>스터디 모집 글 작성</PageTitle>
      <FormContainer width='100%' padding='3%'>
        <PostForm />
      </FormContainer>
    </PageContainer1>
  );
}

export default RecruitFormPage;
