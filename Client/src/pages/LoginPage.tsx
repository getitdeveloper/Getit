import GoogleSocialLogin from '../Auth/GoogleLogin/GoogleLogin';
import KakaoLogin from '../Auth/KakaoLogin/KakaoLogin';

function LoginPage() {

  return (
    <div>
      <div>로그인 페이지</div>
      <GoogleSocialLogin/>
      <KakaoLogin/>
    </div>
  );
}

export default LoginPage;
