import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { USER_PROFILE_REQUEST } from '../../reducers/actions';
import SubHeader from '../../Components/Commons/SubHeader/SubHeader';
import { PageTitle, PageBackground } from '../../styles/page';
import ProfileDetail from '../../Components/ProfileDetail';

function ProfilePage(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.user);
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );
  const history = useHistory();
  console.log(profileInfo);

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
    return <CircularProgress />;
  }
  return (
    <div>
      <SubHeader />
      <PageBackground>
        <PageTitle>내 프로필</PageTitle>
        <ProfileDetail profileInfo={profileInfo} />
      </PageBackground>
    </div>
  );
}

export default ProfilePage;
