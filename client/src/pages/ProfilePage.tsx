import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { USER_PROFILE_REQUEST } from '@reducers/actions';
import { PageTitle, PageBackground } from '@assets/styles/page';
import ProfileDetail from '@components/ProfileDetail';
import LoadingSpinner from '@components/LoadingSpinner';

function ProfilePage(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.user);
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );
  const history = useHistory();

  React.useEffect(() => {
    dispatch({
      type: USER_PROFILE_REQUEST,
      data: {
        user_pk: user.id.user_pk,
      },
    });
  }, []);

  if (!user) {
    history.push('/');
  } else if (!profileInfo) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <PageBackground>
        <ProfileDetail />
      </PageBackground>
    </div>
  );
}

export default ProfilePage;
