import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import KakaoOAuth2Callback from '../Auth/KakaoLogin/KakaoOAuth2Callback';
import GithubCallback from '../Auth/GithubLogin/GithubCallback';
import QuestionBoardPage from '../pages/QuestionBoardPage/index';
import ProfilePage from '../pages/ProfilePage.tsx';
import FreeBoardPage from '../pages/FreeBoardPage/index';
import FreeBoardDetailPage from '../pages/FreeBoardDetailPage';
import QuestionDetailPage from '../pages/QuestionDetailPage';
import RegisterPage from '../pages/RegisterPage';
import QuestionFormPage from '../pages/QuestionFormPage';
import RecruitBoardPage from '../pages/RecruitBoardPage';
import FreeBoardFormPage from '../pages/FreeBoardFormPage';
import RecruitFormPage from '../pages/RecruitFormPage';

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/callback/kakao' component={KakaoOAuth2Callback} />
      <Route exact path='/callback/github' component={GithubCallback} />
      <Route exact path='/questionBoard' component={QuestionBoardPage} />
      <Route exact path='/freeBoard' component={FreeBoardPage} />
      <Route exact path='/myprofile' component={ProfilePage} />
      <Route exact path='/freeBoard/detail' component={FreeBoardDetailPage} />
      <Route
        exact
        path='/questionBoard/detail'
        component={QuestionDetailPage}
      />
      <Route exact path='/register' component={RegisterPage} />
      <Route exact path='/questionBoard/form' component={QuestionFormPage} />
      <Route exact path='/freeBoard/form' component={FreeBoardFormPage} />
      <Route exact path='/recruitBoard' component={RecruitBoardPage} />
      <Route exact path='/recruitBoard/form' component={RecruitFormPage} />
    </Switch>
  );
}

export default Routes;
