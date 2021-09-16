import * as React from 'react';
import KakaoLogo from '@assets/images/Kakao.svg';

function KakaoLogin(): JSX.Element {
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
    <div
      style={{
        width: '100%',
      }}
    >
      <a
        href={KAKAO_AUTH_URL}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fee500',
          color: '#191600',
          borderRadius: '4px',
          boxShadow: '0px 3px 6px 3px rgba(0, 0, 0, 0.16)',
          padding: '5% 0%',
          textDecoration: 'none',
          position: 'relative',
        }}
      >
        <img
          src={KakaoLogo}
          alt='Kakao login'
          style={{ width: '2rem', position: 'absolute', left: '1rem' }}
        />
        <p style={{ fontSize: '1.2rem' }}>카카오톡 아이디로 시작하기</p>
      </a>
    </div>
  );
}

export default KakaoLogin;
