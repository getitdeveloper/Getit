import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import GithubCallback from './SocialLogin/GithubLogin/GithubCallback';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/callback/github" component={GithubCallback} />
      </Switch>
    </div>
  );
}

export default Routes;
