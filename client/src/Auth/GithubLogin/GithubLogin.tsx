import * as React from 'react';

// Github 로그인
function GithubLogin(): JSX.Element {
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
    // todo github 로그인 버튼만 사이즈가 다른데 이유를 모르겠음...! 이유를... 찾아야함
    <div
      style={{
        marginTop: '5%',
      }}
    >
      <a
        href={loginUri}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '4px',
          boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
          padding: '5% 0%',
          textDecoration: 'none',
        }}
      >
        <img src='/icons/github.webp' alt='Github login' width='10%' />
        깃허브 아이디로 시작하기
      </a>
    </div>
  );
}

export default GithubLogin;
