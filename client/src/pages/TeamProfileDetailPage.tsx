import React from 'react';
import TeamProfileDetail from '@components/TeamProfileDetail/index';
import { PageWrapper, PageTitle, PageBackground } from '@assets/styles/page';
import Footer from '@components/Footer/index';

function TeamProfileDetailPage(): JSX.Element {
  return (
    <PageBackground>
      <PageWrapper>
        <PageTitle>팀 프로필</PageTitle>
        <TeamProfileDetail />
      </PageWrapper>
      <Footer />
    </PageBackground>
  );
}

export default TeamProfileDetailPage;
