import * as React from 'react';

// Github 로그인
function GithubLogin(): JSX.Element {
  const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const AUTHORIZATION_CALLBACK =
    process.env.REACT_APP_GITHUB_AUTHORIZATION_CALLBACK_URL;

  // Github 로그인 요청 주소
  const loginUri = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user:email&redirect_uri=${AUTHORIZATION_CALLBACK}`;

  return (
    <div>
      <a href={loginUri}>
        <img src='/images/github-login.png' alt='Github login' />
      </a>
    </div>
  );
}

export default GithubLogin;
