import React, { useCallback, useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import SearchBar from '@components/SearchBar/SearchBar';
import LoginDialog from '@components/LoginDialog/LoginDialog';
import UserInfoButtons from '@components/UserInfoButtons/UserInfoButtons';
import HeaderNav from '@components/Header/HeaderNav';
import { SELECT_TAB } from '@reducers/actions';
import {
  LoginButton,
  HeaderWrapper,
  HeaderContainer,
  LeftHeaderWrapper,
  RightHeaderWrapper,
  Logo,
} from './styles';

import ToggleMenu from './ToggleMenu';

function Header(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
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

  const handleRouting = useCallback(() => {
    // 로고 클릭해서 메인페이지로 이동시 navbar 선택탭 스터디 모집으로 변경
    dispatch({
      type: SELECT_TAB,
      data: 0,
    });
    return history.push('/');
  }, [pathname]);

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
          {/* <Link to='/'> */}
          <Logo onClick={handleRouting} />
          {/* <Logo /> */}
          {/* </Link> */}
        </LeftHeaderWrapper>

        {/* 전체 검색창 또는 navigation */}
        {pathname === '/' || pathname === '/searchResult' ? (
          <SearchBar maxWidth='36.75rem' />
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
