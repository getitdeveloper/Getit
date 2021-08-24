import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import KakaoOAuth2Callback from '../Auth/KakaoLogin/KakaoOAuth2Callback';
import GithubCallback from '../Auth/GithubLogin/GithubCallback';
import StudyRecruitPage from '../pages/StudyRecruitPage';
import QuestionPage from '../pages/QuestionPage';
import FreeTalkPage from '../pages/FreeTalkPage';

function Routes(): JSX.Element {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/callback/kakao' component={KakaoOAuth2Callback} />
        <Route exact path='/callback/github' component={GithubCallback} />
        <Route exact path='/studyrecruit' component={StudyRecruitPage} />
        <Route exact path='/question' component={QuestionPage}/>
        <Route exact path='/freetalk' component={FreeTalkPage}/>
      </Switch>
    </div>
  );
}

export default Routes;
