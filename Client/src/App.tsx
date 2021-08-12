import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/Nav';
import Routes from './Components/Routes';

function App() {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}

export default App;
