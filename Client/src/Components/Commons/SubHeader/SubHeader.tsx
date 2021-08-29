import * as React from 'react';
import { useHistory } from 'react-router-dom';
import UserInfoButtons from '../UserInfoButtons/UserInfoButtons';
import './SubHeader.css';

function SubHeader(): JSX.Element {
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
      <div className='navbar-container'>
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
      <UserInfoButtons />
    </div>
  );
}

export default SubHeader;
