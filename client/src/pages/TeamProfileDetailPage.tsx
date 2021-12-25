import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TeamProfileDetail from '@components/TeamProfileDetail/index';
import { PageWrapper, PageTitle, PageBackground } from '@assets/styles/page';
import Footer from '@components/Footer/index';

function TeamProfileDetailPage(): JSX.Element {
  const history = useHistory();
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user,
  );
  if (!userId) {
    history.push('/');
  }
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
