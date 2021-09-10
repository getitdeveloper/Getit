import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { USER_LOGIN_REQUEST } from '../../reducers/actions';

function KakaoOAuth2Callback(): null {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // 카카오 인가 코드 받아오기
    const accessCode = new URL(window.location.href).searchParams.get('code');
    //   console.log(accessCode);

    const requestData = {
      code: accessCode,
      API_KEY:
        process.env.NODE_ENV === 'production'
          ? process.env.REACT_APP_PROD_KAKAO_API_KEY
          : process.env.REACT_APP_DEV_KAKAO_API_KEY,
      REDIRECT_URI:
        process.env.NODE_ENV === 'production'
          ? process.env.REACT_APP_PROD_KAKAO_REDIRECT_URI
          : process.env.REACT_APP_DEV_KAKAO_REDIRECT_URI,
    };

    if (accessCode) {
      dispatch({
        type: USER_LOGIN_REQUEST,
        data: {
          social: 'kakao',
          ...requestData,
        },
      });

      // 메인 페이지로 이동
      history.push('/');
    } else {
      alert('문제가 발생했습니다. 잠시후 다시 시도해 주세요.');
    }
  }, [dispatch, history]);

  return null;
}

export default KakaoOAuth2Callback;
