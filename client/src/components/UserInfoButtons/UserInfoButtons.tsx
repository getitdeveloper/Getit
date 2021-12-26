import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { MY_PROFILE_SELECT_MENU } from '@reducers/actions';
import { Nickname } from './types';
import {
  UserInfoWrapper,
  StyledPersonIcon,
  StyledNotificationsIcon,
} from './styles';

function UserInfoButtons({ nickname }: Nickname): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleRouting = useCallback(() => {
    dispatch({
      type: MY_PROFILE_SELECT_MENU,
      data: {
        selected: 0,
      },
    });
    return history.push('/myprofile');
  }, []);

  const handleAlert = useCallback(() => {
    return alert('서비스 준비중 입니다.');
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
        <StyledNotificationsIcon fontSize='large' onClick={handleAlert} />
      </button>
    </UserInfoWrapper>
  );
}
export default UserInfoButtons;
