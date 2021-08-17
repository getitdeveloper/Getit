import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Commons/Header';
import NavBar from './Components/Commons/NavBar';
import Nav from './Components/Nav';
import Routes from './Components/Routes';

function App() {
  return (
    <Router>
      <Header/>
      <NavBar/>
      <Routes />
    </Router>
  );
}

export default App;
