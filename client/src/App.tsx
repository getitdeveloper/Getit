import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/Routes';
import ScrollToTop from './components/ScrollToTop';

function App(): JSX.Element {
  return (
    <Router>
      {/* 페이지 이동시 상단으로 이동 */}
      <ScrollToTop />
      {/* 페이지 라우팅 */}
      <Routes />
    </Router>
  );
}

export default App;
