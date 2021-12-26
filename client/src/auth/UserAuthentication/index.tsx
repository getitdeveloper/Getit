import React, { useLayoutEffect } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { USER_PROFILE_REQUEST } from '@reducers/actions';

const auth = (
  SpecificComponent: () => JSX.Element | null,
  option: null | boolean,
): (() => JSX.Element) => {
  const AuthenticationCheck = () => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector(
      (state: RootStateOrAny) => state.user.id.user_pk,
    );

    if (process.env.NODE_ENV === 'production') {
      // 배포 모드에서 사용자 인증
      useLayoutEffect(() => {
        axios
          .get('/api/auth/')
          .then((response) => {
            // console.log('서버와 쿠키 공유 상태 response ===> ', response);
            dispatch({
              type: USER_PROFILE_REQUEST,
              data: {
                user_pk: response.data.user_pk,
              },
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
    } else {
      // 개발 모드에서 사용자 인증
      useLayoutEffect(() => {
        dispatch({
          type: USER_PROFILE_REQUEST,
          data: {
            user_pk: userId,
          },
        });
      }, [userId]);
    }

    return <SpecificComponent />;
  };
  return AuthenticationCheck;
};

export default auth;
