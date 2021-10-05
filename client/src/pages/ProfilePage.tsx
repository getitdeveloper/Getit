import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { USER_PROFILE_REQUEST } from '@reducers/actions';
import { PageTitle, PageContainer1 } from '@assets/styles/page';
import ProfileDetail from '@components/ProfileDetail';
import LoadingSpinner from '@components/LoadingSpinner';

function ProfilePage(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = user.profileInfo?.user_pk;
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );
  const history = useHistory();

  React.useEffect(() => {
    dispatch({
      type: USER_PROFILE_REQUEST,
      data: {
        user_pk: userId,
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
      <PageContainer1>
        <ProfileDetail />
      </PageContainer1>
    </div>
  );
}

export default ProfilePage;
