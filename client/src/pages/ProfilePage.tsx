import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { PageBackground, PageWrapper } from '@assets/styles/page';
import ProfileDetail from '@components/ProfileDetail';
import LoadingSpinner from '@components/LoadingSpinner';
import Footer from '@components/Footer/index';
import { SELECT_TAB } from '@reducers/actions';

function ProfilePage(): JSX.Element {
  const dispatch = useDispatch();
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: SELECT_TAB,
      data: 0,
    });
  }, []);

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
      <Footer />
    </PageBackground>
  );
}

export default ProfilePage;
