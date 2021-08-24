import * as React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import LoginDialog from '../../LoginDialog/LoginDialog';
import { useHistory } from 'react-router-dom';

interface Props{
  logined: boolean
}

function Header({logined}: Props): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
  };

  if(logined){
    return(
      <div>
        <p className='logotext'>Get IT</p>
        <div>
          <button type='button' onClick={()=>history.push('/studyrecruit')}>스터디 모집 게시판</button>
          <button type='button' onClick={()=>history.push('/studyrecruit')}>질문 게시판</button>
          <button type='button' onClick={()=>history.push('/studyrecruit')}>자유 게시판</button>
        </div>
        <div>
          <p>정유미님</p>
          <button>user</button>
          <button>alert</button>
        </div>
      </div>
    );
  }
  else{
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
}

export default Header;
