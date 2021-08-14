import React, { useEffect, useState } from 'react';
import MainPage from '../../../pages/MainPage';
import axios from 'axios';

function GithubCallback() {
  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes('?code=');
    // console.log('=========>', url);

    // If Github API returns the code parameter
    if (hasCode) {
      const accessCode = url.split('?code=')[1];
      // console.log(accessCode);
      // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
      // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
      const requestData = {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
        code: accessCode,
      };

      axios
        .post('/api', requestData)
        .then((response) => {
          console.log('성공 ==> ', response);
        })
        .catch((error) => {
          console.log('실패 ==>', error);
        });
    }
  }, []);

  return <MainPage />;
}

export default GithubCallback;
