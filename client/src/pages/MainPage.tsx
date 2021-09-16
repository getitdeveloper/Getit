import * as React from 'react';
import Banner from '@components/Banner';
import NavBar from '@components/NavBar/index';

function MainPage(): JSX.Element {
  return (
    <div>
      <Banner />
      <NavBar />
    </div>
  );
}

export default MainPage;
