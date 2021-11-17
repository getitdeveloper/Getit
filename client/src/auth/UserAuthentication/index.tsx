import React, { useLayoutEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { USER_PROFILE_REQUEST } from '@reducers/actions';

const auth = (
  SpecificComponent: () => JSX.Element | null,
  option: null | boolean,
): (() => JSX.Element) => {
  const AuthenticationCheck = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
      if (option === true) {
        axios
          .get('/api/auth/')
          .then((response) => {
            console.log('서버와 쿠키 공유 상태 response ===> ', response);
            dispatch({
              type: USER_PROFILE_REQUEST,
              data: {
                user_pk: response.data.user_pk,
              },
            });
          })
          .catch((error) => {
            console.log('서버와 쿠키 공유 상태 error ===>', error);
            alert('로그인이 필요합니다. 로그인 후 이용해 주세요.');
            return history.push('/');
          });
      } else if (option === false) {
        return history.push('/');
      }
    }, []);

    return <SpecificComponent />;
  };
  return AuthenticationCheck;
};

export default auth;
