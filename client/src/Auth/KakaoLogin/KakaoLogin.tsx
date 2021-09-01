import * as React from 'react';

function KakaoLogin(): JSX.Element {
  const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div
      style={{
        marginTop: '5%',
      }}
    >
      <a
        href={KAKAO_AUTH_URL}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fee500',
          color: '#191600',
          borderRadius: '4px',
          boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
          padding: '5% 0%',
          textDecoration: 'none',
        }}
      >
        <img src='/icons/kakao-logo.webp' alt='Kakao login' width='10%' />
        카카오톡 아이디로 시작하기
      </a>
    </div>
  );
}

export default KakaoLogin;
