import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Header from './Components/Commons/Header/Header';
import NavBar from './Components/Commons/NavBar/NavBar';
import Nav from './Components/Nav';
import Routes from './Components/Routes';

function App() {
  return (
    <Router>
      <Header/>
      <Banner/>
      <NavBar/>
      <Routes />
    </Router>
  );
}

export default App;
