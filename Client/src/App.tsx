import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Header from './Components/Commons/Header/Header';
import NavBar from './Components/Commons/NavBar/NavBar';
import Routes from './Components/Routes';

function App(): JSX.Element {
  return (
    <Router>
      <Header logined={true}/>
      <Banner />
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
