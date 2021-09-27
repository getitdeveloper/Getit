import * as React from 'react';
import { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import axios from 'axios';
import Header from '@components/Header/index';
import { routeList } from '@components/routeList';
import { USER_PROFILE_REQUEST } from '@reducers/actions';

function Routes(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const message = useSelector((state: RootStateOrAny) => state.user.id.message);

  useEffect(() => {
    if (message === 'register') {
      return history.push('/register');
    }
  }, [message]);

  useEffect(() => {
    axios
      .get('/api/auth/')
      .then((response) => {
        console.log('서버와 쿠키 공유 상태 ===> ', response);
        dispatch({
          type: USER_PROFILE_REQUEST,
          data: {
            user_pk: response.data.user_pk,
          },
        });
      })
      .catch((error) => console.log('서버와 쿠키 공유 상태 ===>', error));
  }, [message]);

  return (
    <>
      {/* 작성되지 않은 경로의 경우 렌더링 X  */}
      {routeList.some((list) => list.path === pathname) ? <Header /> : null}

      <Switch>
        {routeList.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={route.page}
          />
        ))}
      </Switch>
    </>
  );
}

export default Routes;
