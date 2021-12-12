import React from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import { PageBackground, PageWrapper } from '@assets/styles/page';
import ProfileDetail from '@components/ProfileDetail';
import LoadingSpinner from '@components/LoadingSpinner';

function ProfilePage(): JSX.Element {
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );
  const history = useHistory();

  if (!userId) {
    history.push('/');
  }
  if (!profileInfo) {
    return <LoadingSpinner />;
  }
  return (
    <PageBackground>
      <PageWrapper>
        <ProfileDetail />
      </PageWrapper>
    </PageBackground>
  );
}

export default ProfilePage;
