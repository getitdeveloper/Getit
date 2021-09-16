import * as React from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Nickname } from './types';
import {
  UserInfoWrapper,
  StyledPersonIcon,
  StyledNotificationsIcon,
} from './styles';

function UserInfoButtons({ nickname }: Nickname): JSX.Element {
  const history = useHistory();

  const handleRouting = useCallback(() => {
    return history.push('/myprofile');
  }, []);

  return (
    <UserInfoWrapper>
      <p>{nickname} 님</p>
      <button type='button' className='icon-button' onClick={handleRouting}>
        <StyledPersonIcon fontSize='large' />
      </button>
      <button type='button' className='icon-button'>
        <StyledNotificationsIcon fontSize='large' />
      </button>
    </UserInfoWrapper>
  );
}
export default UserInfoButtons;
