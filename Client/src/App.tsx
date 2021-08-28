import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Header from './Components/Commons/Header/Header';
import LoginedHeader from './Components/Commons/LoginedHeader/LoginedHeader';
import NavBar from './Components/Commons/NavBar/NavBar';
import Routes from './Components/Routes';
import './App.css';

function App(): JSX.Element {
  return (
    <Router>
      <LoginedHeader />
      {/* <Banner />
      <NavBar /> */}
      <Routes />
    </Router>
  );
}

export default App;
