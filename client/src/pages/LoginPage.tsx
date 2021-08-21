import GithubLogin from '../Auth/GithubLogin/GithubLogin';
import GoogleSocialLogin from '../Auth/GoogleLogin/GoogleLogin';
import KakaoLogin from '../Auth/KakaoLogin/KakaoLogin';

function LoginPage() {

  return (
    <div>
      <div>로그인 페이지</div>
      <GoogleSocialLogin/>
      <KakaoLogin/>
       <GithubLogin />
    </div>
  );
}

export default LoginPage;
