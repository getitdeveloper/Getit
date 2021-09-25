import * as React from 'react';
import GithubLogoImg from '@assets/images/Github.svg';
import { LoginProps } from '@types';
import { Button } from './style';

// Github 로그인
function GithubLogin({ onClose }: LoginProps): JSX.Element {
  const CLIENT_ID =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PROD_GITHUB_CLIENT_ID
      : process.env.REACT_APP_DEV_GITHUB_CLIENT_ID;
  const AUTHORIZATION_CALLBACK =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PROD_GITHUB_AUTHORIZATION_CALLBACK_URL
      : process.env.REACT_APP_DEV_GITHUB_AUTHORIZATION_CALLBACK_URL;

  // Github 로그인 요청 주소
  const loginUri = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user:email&redirect_uri=${AUTHORIZATION_CALLBACK}`;

  return (
    <Button type='button' onClick={onClose}>
      <a href={loginUri}>
        <img src={GithubLogoImg} alt='Github login' />
        <p>깃허브 아이디로 시작하기</p>
      </a>
    </Button>
  );
}

export default GithubLogin;
