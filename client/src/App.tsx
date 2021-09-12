import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Routes from './Components/Routes';
import ScrollToTop from './Components/ScrollToTop';

function App(): JSX.Element {
  return (
    <Router>
      {/* 페이지 라우팅 */}
      <ScrollToTop />
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
