import * as React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Routes';

function App(): JSX.Element {
  // const message = useSelector((state: RootStateOrAny) => state.user.id.message);

  return (
    <Router>
      {/* 페이지 라우팅 */}
      <Routes />
    </Router>
  );
}

export default App;
