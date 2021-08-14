import React from 'react';
import dotenv from 'dotenv';
import GoogleLogin from '../Components/SocialLogin/GoogleLogin/GoogleLogin';
import GithubLogin from '../Components/SocialLogin/GithubLogin/GithubLogin';
dotenv.config();

function LoginPage() {
  return (
    <div>
      <div>로그인 페이지</div>
      <GoogleLogin />
      <GithubLogin />
    </div>
  );
}

export default LoginPage;
