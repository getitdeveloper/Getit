import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import OAuth2RedirectHandler from './OAuth2RedirectHandler';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/callback/kakao" component={OAuth2RedirectHandler}/>
      </Switch>
    </div>
  );
}

export default Routes;
