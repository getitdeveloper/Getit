import * as React from 'react';
import { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import Header from '@components/Header/index';
import { routeList } from '@components/routeList';

function Routes(): JSX.Element {
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
      .get('/')
      .then((res) => console.log('서버상태 ===> ', res))
      .catch((error) => console.log('서버상태 ===> ', error));
  }, []);

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
