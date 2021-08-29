import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Routes';

function App(): JSX.Element {
  return (
    <Router>
      {/* 페이지 라우팅 */}
      <Routes />
    </Router>
  );
}

export default App;
