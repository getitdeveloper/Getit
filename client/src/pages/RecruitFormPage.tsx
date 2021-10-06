import * as React from 'react';
import RecruitPostForm from '@components/RecruitPostForm';
import { PageContainer1, PageTitle, PageBackground } from '@assets/styles/page';

function RecruitFormPage(): JSX.Element {
  return (
    <PageBackground>
      <PageContainer1>
        <PageTitle>스터디 모집 글 작성</PageTitle>
        <RecruitPostForm />
      </PageContainer1>
    </PageBackground>
  );
}

export default RecruitFormPage;
