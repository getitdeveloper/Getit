import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import LoginDialog from '../LoginDialog/LoginDialog';
import UserInfoButtons from '../UserInfoButtons/UserInfoButtons';
import LogoSvg from '../../assets/images/Logo.svg';
import HeaderNav from '../HeaderNav/index';
import { LoginButton } from './styles';
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        margin: '0 auto',
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <Link to='/'>
        <img src={LogoSvg} alt='logo' style={{ width: '12rem' }} />
      </Link>
      {/* 메인 페이지인 경우 검색창, 다른 페이지의 경우 네비게이션 */}
      {pathname === '/' ? <SearchBar /> : <HeaderNav />}

      {/* 로그인한 경우  */}
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
    </div>
  );
}

export default Header;
