import * as React from 'react';
import { useHistory } from 'react-router-dom';
import './UserInfoButtons.css';

function UserInfoButtons(): JSX.Element {
  const history = useHistory();

  return (
    <div className='userinfo-container'>
      <p style={{ fontSize: '80%' }}>박지수님</p>
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
  );
}
export default UserInfoButtons;
