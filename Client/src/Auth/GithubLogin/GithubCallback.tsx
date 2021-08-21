import React, { useEffect } from 'react';
import MainPage from '../../pages/MainPage';
import { useDispatch } from 'react-redux';
import { USER_LOGIN_REQUEST } from '../../reducers/user';

function GithubCallback() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Github 로그인 승인 후 callback URL
    const url = window.location.href;
    const hasCode = url.includes('?code=');

    // If Github API returns the code parameter
    if (hasCode) {
      // 사용자 식별 코드
      const accessCode = url.split('?code=')[1];

      const accessData = {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
        code: accessCode,
      };

      dispatch({
        type: USER_LOGIN_REQUEST,
        data: {
          social: 'github',
          ...accessData,
        },
      });
    } else {
      alert('문제가 발생했습니다. 잠시후 다시 시도해 주세요.');
    }
  }, []);

  return <MainPage />;
}

export default GithubCallback;
