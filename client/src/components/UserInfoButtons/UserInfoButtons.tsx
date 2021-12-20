import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Nickname } from './types';
import {
  UserInfoWrapper,
  StyledPersonIcon,
  StyledNotificationsIcon,
} from './styles';

function UserInfoButtons({ nickname }: Nickname): JSX.Element {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleRouting = useCallback(() => {
    return history.push('/myprofile');
  }, []);

  const checkPath = ['recruitBoard', 'questionBoard', 'freeBoard', 'myprofile'];

  const checkAvailability = (arr: string[], path: string) => {
    return arr.some((arrVal) => {
      return path.includes(arrVal);
    });
  };

  return (
    <UserInfoWrapper>
      {/* 특정 페이지에서 닉네임 출력 제한 */}
      {checkAvailability(checkPath, pathname) ? null : <p>{nickname} 님</p>}
      <button type='button' onClick={handleRouting}>
        <StyledPersonIcon fontSize='large' />
      </button>
      <button type='button' className='icon-button'>
        <StyledNotificationsIcon fontSize='large' />
      </button>
    </UserInfoWrapper>
  );
}
export default UserInfoButtons;
