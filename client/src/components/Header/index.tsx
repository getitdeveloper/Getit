import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import SearchBar from '@components/SearchBar/SearchBar';
import LoginDialog from '@components/LoginDialog/LoginDialog';
import UserInfoButtons from '@components/UserInfoButtons/UserInfoButtons';
import HeaderNav from '@components/Header/HeaderNav';
import {
  LoginButton,
  HeaderWrapper,
  HeaderContainer,
  LeftHeaderWrapper,
  RightHeaderWrapper,
  Logo,
} from './styles';
import { USER_PROFILE_REQUEST } from '../../reducers/actions';
import ToggleMenu from './ToggleMenu';

function Header(): JSX.Element {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const userId = useSelector((state: RootStateOrAny) => state.user.id.user_pk);
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
        user_pk: userId,
      },
    });
  }, [userId]);

  // 회원가입 페이지인 경우 header 감추기
  if (pathname === '/register') {
    return <div />;
  }
  return (
    <HeaderWrapper className={pathname}>
      <HeaderContainer className={pathname}>
        {/* 테블릿, 모바일 버전 메뉴 */}
        <ToggleMenu />
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
          {profileInfo?.nickname ? (
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
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
