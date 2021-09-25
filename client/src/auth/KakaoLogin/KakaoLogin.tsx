import * as React from 'react';
import KakaoLogoImg from '@assets/images/Kakao.svg';
import { LoginProps } from '@types';
import { Button } from './style';

function KakaoLogin({ onClose }: LoginProps): JSX.Element {
  const API_KEY =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PROD_KAKAO_API_KEY
      : process.env.REACT_APP_DEV_KAKAO_API_KEY;
  const REDIRECT_URI =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PROD_KAKAO_REDIRECT_URI
      : process.env.REACT_APP_DEV_KAKAO_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <Button type='button' onClick={onClose}>
      <a href={KAKAO_AUTH_URL}>
        <img src={KakaoLogoImg} alt='Kakao login' />
        <p>카카오톡 아이디로 시작하기</p>
      </a>
    </Button>
  );
}

export default KakaoLogin;
