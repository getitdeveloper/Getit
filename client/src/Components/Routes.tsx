import * as React from 'react';
import { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import axios from 'axios';
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
import Header from './Header/index';

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
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* 회원가입 페이지는 Header 제거 */}
      {pathname !== '/register' && <Header />}
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
    </>
  );
}

export default Routes;
