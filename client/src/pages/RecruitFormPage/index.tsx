import * as React from 'react';
import PostForm from '../../Components/PostForm';
import { PageBackground, PageContainer, PageTitle } from '../../styles/page';

function RecruitFormPage() {
  return (
    <div>
      <PageBackground>
        <PageTitle>스터디 모집 글 작성</PageTitle>
        <PageContainer width='80%' padding='3%'>
          <PostForm />
        </PageContainer>
      </PageBackground>
    </div>
  );
}

export default RecruitFormPage;
