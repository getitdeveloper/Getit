import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Commons/NavBar/index';
import MainHeader from './Components/MainHeader/MainHeader';
import Routes from './Components/Routes';

function App(): JSX.Element {
  return (
    <Router>
      {/* 페이지 상단  */}
      <MainHeader />
      <Banner />
      <NavBar />
      {/* 페이지 라우팅 */}
      <Routes />
    </Router>
  );
}

export default App;
