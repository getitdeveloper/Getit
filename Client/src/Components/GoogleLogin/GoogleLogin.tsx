import { useCallback } from 'react';
import GoogleLogin from 'react-google-login';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

interface User {
    email: string;
    name: string;
  }

function GoogleSocialLogin(){
    // response에 유저 정보가 담겨있다.
  const handleSuccess = useCallback((response) => {
    // console.log(response);
    const email = response.profileObj.email;
    const name = response.profileObj.name;

    const userInfo: User = {
      email,
      name,
    };

    axios
      .post('/account/login', userInfo)
      .then((response) => {
        // 성공
      })
      .catch((error) => {
        // 실패
      });
  }, []);

  const handleFailure = useCallback(() => {
    alert('문제가 발생했습니다. 잠시후 다시 시도해 주세요.');
  }, []);

  // Google Login Access URL
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  if (!clientId) {
    alert('문제가 발생했습니다. 잠시후 다시 시도해 주세요.');
    return <div></div>;
  }

  return (
      <GoogleLogin
        clientId={clientId}
        buttonText="Login With Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      />
  );

}

export default GoogleSocialLogin;