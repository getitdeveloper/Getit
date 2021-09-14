import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import LoginDialog from '../LoginDialog/LoginDialog';
import UserInfoButtons from '../UserInfoButtons/UserInfoButtons';
import HeaderNav from '../HeaderNav/index';
import {
  LoginButton,
  HeaderWrapper,
  LeftHeaderWrapper,
  RightHeaderWrapper,
  Logo,
} from './styles';
import { USER_PROFILE_REQUEST } from '../../reducers/actions';

function Header(): JSX.Element {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const id = useSelector((state: RootStateOrAny) => state.user.id.user_pk);
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [open]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [open]);

  useEffect(() => {
    dispatch({
      type: USER_PROFILE_REQUEST,
      data: {
        user_pk: id,
      },
    });
  }, [id]);

  return (
    <HeaderWrapper>
      {/* GetIt 로고 */}
      <LeftHeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
      </LeftHeaderWrapper>

      {/* 전체 검색창 또는 navigation */}
      {pathname === '/' || pathname === '/searchResult' ? (
        <SearchBar />
      ) : (
        <HeaderNav />
      )}

      {/* 로그인한 경우  */}
      <RightHeaderWrapper>
        {profileInfo ? (
          <UserInfoButtons nickname={profileInfo.nickname} />
        ) : (
          // 로그인하지 않은 경우
          <>
            <LoginButton type='button' onClick={handleOpen}>
              Login
            </LoginButton>
            <LoginDialog open={open} onClose={handleClose} />
          </>
        )}
      </RightHeaderWrapper>
    </HeaderWrapper>
  );
}

export default Header;
