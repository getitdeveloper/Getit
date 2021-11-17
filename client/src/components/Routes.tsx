import * as React from 'react';
import { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import Header from '@components/Header/index';
import { routeList } from '@components/routeList';
import auth from '@auth/UserAuthentication/index';

function Routes(): JSX.Element {
  const history = useHistory();
  const { pathname } = useLocation();
  const message = useSelector((state: RootStateOrAny) => state.user.id.message);

  useEffect(() => {
    if (message === 'register') {
      return history.push('/register');
    }
  }, [message]);

  return (
    <>
      {/* 작성되지 않은 경로의 경우 렌더링 X  */}
      {routeList.some(
        (list) =>
          list.path === pathname ||
          'recruitBoard/*' ||
          'questionBoard/*' ||
          'freeBoard/*',
      ) ? (
        <Header />
      ) : null}

      <Switch>
        {routeList.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={auth(route.page, route.auth)}
          />
        ))}
      </Switch>
    </>
  );
}

export default Routes;
