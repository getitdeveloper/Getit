import React from 'react';
import { PageWrapper, PageTitle, PageBackground } from '@assets/styles/page';
import TeamProfilePostForm from '@components/TeamProfilePostForm';

function TeamProfileFormPage(): JSX.Element {
  return (
    <PageBackground>
      <PageWrapper>
        <PageTitle>팀 프로필 생성</PageTitle>
        <TeamProfilePostForm />
      </PageWrapper>
    </PageBackground>
  );
}

export default TeamProfileFormPage;
