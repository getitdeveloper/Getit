import * as React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import MainHeader from '../../Components/MainHeader/MainHeader';
import Banner from '../../Components/Banner/Banner';
import NavBar from '../../Components/Commons/NavBar';

function MainPage(): JSX.Element {
  const user = useSelector((state: RootStateOrAny) => state.user);
  console.log(user);

  return (
    <div>
      <MainHeader />
      <Banner />
      <NavBar />
    </div>
  );
}

export default MainPage;
