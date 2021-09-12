import * as React from 'react';
import { useCallback, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import LoginDialog from '../LoginDialog/LoginDialog';
import UserInfoButtons from '../Commons/UserInfoButtons/UserInfoButtons';
import LogoSvg from '../../assets/images/Logo.svg';
import NavBar from '../NavBar';

function Header(): JSX.Element {
  const user = useSelector((state: RootStateOrAny) => state.user);

  const location = useLocation();
  console.log('this location is ===> ', location);

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [open]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [open]);

  return (
    <div style={{ marginTop: '1rem' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '80%',
          margin: '0 auto',
        }}
      >
        <img src={LogoSvg} alt='logo' style={{ width: '12rem' }} />
        {location.pathname === '/' ? <SearchBar /> : <NavBar />}

        {user.id.user_pk ? (
          <UserInfoButtons />
        ) : (
          <div>
            <button
              type='button'
              onClick={handleOpen}
              style={{
                padding: '0.5rem 1.063rem',
                borderRadius: '7px',
                backgroundColor: '#4dd290',
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: '1.15',
                letterSpacing: 'normal',
                textAlign: 'left',
                color: '#FFFFFF',
                fontSize: '1.5rem',
              }}
            >
              Login
            </button>
            <LoginDialog open={open} onClose={handleClose} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
