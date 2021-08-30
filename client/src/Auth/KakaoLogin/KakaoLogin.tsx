import * as React from 'react';

function KakaoLogin(): JSX.Element {
  const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
        <img src='/images/kakao-login.svg' alt='Kakao login' />
      </a>
    </div>
  );
}

export default KakaoLogin;
