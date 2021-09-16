import * as React from 'react';
import { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import Header from '@components/Header/index';
import MainPage from '@pages/MainPage';
import KakaoOAuth2Callback from '@auth/KakaoLogin/KakaoOAuth2Callback';
import GithubCallback from '@auth/GithubLogin/GithubCallback';
import QuestionBoardPage from '@pages/QuestionBoardPage';
import ProfilePage from '@pages/ProfilePage';
import FreeBoardPage from '@pages/FreeBoardPage';
import FreeBoardDetailPage from '@pages/FreeBoardDetailPage';
import QuestionDetailPage from '@pages/QuestionDetailPage';
import RegisterPage from '@pages/RegisterPage';
import QuestionFormPage from '@pages/QuestionFormPage';
import RecruitBoardPage from '@pages/RecruitBoardPage';
import FreeBoardFormPage from '@pages/FreeBoardFormPage';
import RecruitFormPage from '@pages/RecruitFormPage';
import SearchResultPage from '@pages/SearchResultPage';

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
        <Route exact path='/searchResult' component={SearchResultPage} />
      </Switch>
    </>
  );
}

export default Routes;
