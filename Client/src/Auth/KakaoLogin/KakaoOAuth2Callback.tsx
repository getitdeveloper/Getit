import { useEffect } from 'react';
import MainPage from '../../pages/MainPage';
import { useDispatch } from 'react-redux';
import { USER_LOGIN_REQUEST } from '../../reducers/user';
import dotenv from 'dotenv';
dotenv.config();

function KakaoOAuth2Callback() {
  const dispatch = useDispatch();

  useEffect(() => {
    //카카오 인가 코드 받아오기
    let accessCode = new URL(window.location.href).searchParams.get('code');
    //   console.log(accessCode);

    if (accessCode) {
      dispatch({
        type: USER_LOGIN_REQUEST,
        data: {
          social: 'kakao',
          code: accessCode,
          API_KEY: process.env.REACT_APP_KAKAO_API_KEY,
          REDIRECT_URI: process.env.REACT_APP_KAKAO_REDIRECT_URI,
        },
      });
    } else {
      alert('문제가 발생했습니다. 잠시후 다시 시도해 주세요.');
    }
  }, []);

  return <MainPage />;
}

export default KakaoOAuth2Callback;
