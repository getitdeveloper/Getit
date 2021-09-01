import * as React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import SearchBar from '../Commons/SearchBar/SearchBar';
import './MainHeader.css';
import LoginDialog from '../LoginDialog/LoginDialog';
import UserInfoButtons from '../Commons/UserInfoButtons/UserInfoButtons';

function MainHeader(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state: RootStateOrAny) => state.user);

  console.log('user at main header: ', user.id);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='logo'>
        <p className='logotext'>Get IT</p>
        <SearchBar />
        {user.id ? (
          <UserInfoButtons />
        ) : (
          <div>
            <button
              type='button'
              onClick={() => setOpen(true)}
              className='loginbtn'
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

export default MainHeader;
