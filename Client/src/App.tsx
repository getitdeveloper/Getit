import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Routes';

function App(): JSX.Element {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
