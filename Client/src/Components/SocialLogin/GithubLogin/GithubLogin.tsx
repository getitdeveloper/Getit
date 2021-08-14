import React from 'react';
import dotenv from 'dotenv';
dotenv.config();

function GithubLogin() {
  const Client_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const AUTHORIZATION_CALLBACK =
    process.env.REACT_APP_GITHUB_AUTHORIZATION_CALLBACK_URL;

  // const loginUri = `https://github.com/login/oauth/authorize?client_id=${Client_ID}&scope=user:email&redirect_uri=${AUTHORIZATION_CALLBACK}`;

  const loginUri = `https://github.com/login/oauth/authorize?client_id=${Client_ID}&scope=user:email read:user&redirect_uri=${AUTHORIZATION_CALLBACK}`;

  return (
    <div>
      <a href={loginUri}>깃허브 로그인</a>
    </div>
  );
}

export default GithubLogin;
