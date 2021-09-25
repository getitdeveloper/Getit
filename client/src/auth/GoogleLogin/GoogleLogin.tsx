import * as React from 'react';
import { useCallback } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { USER_LOGIN_REQUEST } from '@reducers/actions';
import GoogleLogoImg from '@assets/images/Google.svg';
import { Button } from './style';

// 구글 로그인
function GoogleSocialLogin(): JSX.Element {
  const dispatch = useDispatch();

  const handleSuccess = useCallback(
    (response) => {
      // response에 유저 정보가 담겨있다.
      const accessToken: string = response.accessToken;

      dispatch({
        type: USER_LOGIN_REQUEST,
        data: {
          social: 'google',
          access_token: accessToken,
        },
      });
    },
    [dispatch],
  );

  const handleFailure = useCallback(() => {
    // 사용자가 로그인 취소시에도 failure가 동작한다.
    alert('문제가 발생했습니다. 잠시후 다시 시도해 주세요.');
  }, []);

  // Google Login Access URL
  const clientId =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PROD_GOOGLE_CLIENT_ID
      : process.env.REACT_APP_DEV_GOOGLE_CLIENT_ID;

  if (!clientId) {
    alert('문제가 발생했습니다. 잠시후 다시 시도해 주세요.');
    return <div />;
  }

  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <Button
          type='button'
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <div>
            <img src={GoogleLogoImg} alt='Google login' />
            <p>구글 아이디로 시작하기</p>
          </div>
        </Button>
      )}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy='single_host_origin'
    />
  );
}

export default GoogleSocialLogin;
