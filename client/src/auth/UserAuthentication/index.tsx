import React, { useLayoutEffect } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { USER_PROFILE_REQUEST } from '@reducers/actions';

const auth = (
  SpecificComponent: () => JSX.Element | null,
  option: null | boolean,
): (() => JSX.Element) => {
  const AuthenticationCheck = () => {
    // const history = useHistory();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
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
        });
    }, []);

    return <SpecificComponent />;
  };
  return AuthenticationCheck;
};

export default auth;
