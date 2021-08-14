import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import GoogleSocialLogin from 'react-google-login';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

// interface User {
//   email: string;
//   name: string;
// }

function GoogleLogin() {
  let history = useHistory();

  // response에 유저 정보가 담겨있다.
  const handleSuccess = useCallback((response) => {
    // console.log(response.tokenObj.access_token);
    const email = response.profileObj.email;
    const name = response.profileObj.name;

    // const userInfo: User = {
    //   email,
    //   name,
    // };

    const accessToken = {
      access_token: response.tokenObj.access_token,
    };
    history.push('/');
    // /accounts/dj-rest-auth/google/
    axios
      .post('/accounts/dj-rest-auth/google/', accessToken)
      .then((response) => {
        // 성공
        // history.push('/');
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
    <div>
      <GoogleSocialLogin
        clientId={clientId}
        buttonText="Login With Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default GoogleLogin;
