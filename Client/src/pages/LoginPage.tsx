import GoogleSocialLogin from '../Components/GoogleLogin/GoogleLogin';
import KakaoLogin from '../Components/KakaoLogin/KakaoLogin';

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
