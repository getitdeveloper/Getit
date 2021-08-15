import React, { useEffect } from 'react';
import MainPage from '../../pages/MainPage';
import axios from 'axios';

function GithubCallback() {
  useEffect(() => {
    // Github 로그인 승인 후 callback URL
    const url = window.location.href;
    const hasCode = url.includes('?code=');

    // If Github API returns the code parameter
    if (hasCode) {
      // 사용자 식별 코드
      const accessCode = url.split('?code=')[1];

      const requestData = {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
        code: accessCode,
      };

      //TODO api 주소 협의하기
      axios
        .post('/api/login/github', requestData)
        .then((response) => {
          console.log('성공 ==> ', response.data);
        })
        .catch((error) => {
          console.log('실패 ==>', error);
        });
    }
  }, []);

  return <MainPage />;
}

export default GithubCallback;
