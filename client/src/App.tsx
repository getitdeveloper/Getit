import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Routes';
import ScrollToTop from './Components/ScrollToTop';

function App(): JSX.Element {
  // const message = useSelector((state: RootStateOrAny) => state.user.id.message);

  return (
    <Router>
      {/* 페이지 라우팅 */}
      <ScrollToTop />
      <Routes />
    </Router>
  );
}

export default App;
