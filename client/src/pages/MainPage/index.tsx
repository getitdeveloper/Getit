import * as React from 'react';
import Banner from '../../Components/Banner/Banner';
import NavBar from '../../Components/NavBar/index';

function MainPage(): JSX.Element {
  return (
    <div>
      <Banner />
      <NavBar />
    </div>
  );
}

export default MainPage;
