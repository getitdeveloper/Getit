import * as React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Commons/NavBar/index';
import MainHeader from './Components/MainHeader/MainHeader';
import Routes from './Components/Routes';

function App(): JSX.Element {
  const message = useSelector((state: RootStateOrAny) => state.user.id.message);

  return (
    <Router>
      {/* 회원 가입시 제거 */}
      {message !== 'register' && (
        <div>
          <MainHeader />
          <Banner />
          <NavBar />
        </div>
      )}

      {/* 페이지 라우팅 */}
      <Routes />
    </Router>
  );
}

export default App;
