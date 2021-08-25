import * as React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import LoginDialog from '../../LoginDialog/LoginDialog';

function Header(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='logo'>
        <p className='logotext'>Get IT</p>
        <SearchBar />
        <button
          type='button'
          onClick={() => setOpen(true)}
          className='loginbtn'
        >
          Login
        </button>
        <LoginDialog open={open} onClose={handleClose} />
      </div>
    </div>
  );
}

export default Header;
