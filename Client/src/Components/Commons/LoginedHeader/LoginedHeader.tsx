import * as React from 'react';
import { useHistory } from 'react-router-dom';
import './LoginedHeader.css';

function LoginedHeader(): JSX.Element {
  const history = useHistory();
  return (
    <div className='header-container'>
      <button
        type='button'
        className='logo-button'
        onClick={() => history.push('/')}
      >
        GET IT
      </button>
      <div>
        <button type='button' onClick={() => history.push('/studyrecruit')}>
          스터디 모집 게시판
        </button>
        <button type='button' onClick={() => history.push('/question')}>
          질문 게시판
        </button>
        <button type='button' onClick={() => history.push('/freetalk')}>
          자유 게시판
        </button>
      </div>
      <div className='userinfo-container'>
        <p>정유미님</p>
        <button
          type='button'
          className='icon-button'
          onClick={() => history.push('/myprofile')}
        >
          <img src='/icons/user.svg' alt='user-menu' />
        </button>
        <button type='button' className='icon-button'>
          <img src='/icons/alert.svg' alt='alert' />
        </button>
      </div>
    </div>
  );
}

export default LoginedHeader;
