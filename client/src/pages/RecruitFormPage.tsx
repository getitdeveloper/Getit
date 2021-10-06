import * as React from 'react';
import RecruitPostForm from '@components/RecruitPostForm';
import { PageWrapper, PageTitle, PageBackground } from '@assets/styles/page';

function RecruitFormPage(): JSX.Element {
  return (
    <PageBackground>
      <PageWrapper>
        <PageTitle>스터디 모집 글 작성</PageTitle>
        <RecruitPostForm />
      </PageWrapper>
    </PageBackground>
  );
}

export default RecruitFormPage;
