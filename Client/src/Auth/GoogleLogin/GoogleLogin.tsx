import { useCallback } from 'react';
import GoogleLogin from 'react-google-login';
import dotenv from 'dotenv';
import { useDispatch } from 'react-redux';
import { USER_LOGIN_REQUEST } from '../../reducers/user';
dotenv.config();

function GoogleSocialLogin() {
  const dispatch = useDispatch();

  const handleSuccess = useCallback((response) => {
    // response에 유저 정보가 담겨있다.
    const accessToken = response.accessToken;

    dispatch({
      type: USER_LOGIN_REQUEST,
      data: {
        social: 'google',
        access_token: accessToken,
      },
    });
  }, []);

  const handleFailure = useCallback(() => {
    alert('문제가 발생했습니다. 잠시후 다시 시도해 주세요.');
  }, []);

  // Google Login Access URL
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  if (!clientId) {
    console.log('문제가 발생했습니다. 잠시후 다시 시도해 주세요.');
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
