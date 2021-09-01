import * as React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import MainHeader from '../../Components/MainHeader/MainHeader';
import Banner from '../../Components/Banner/Banner';
import NavBar from '../../Components/Commons/NavBar';

function MainPage(): JSX.Element {
  const history = useHistory();

  const message = useSelector((state: RootStateOrAny) => state.user.id.message);

  useEffect(() => {
    if (message === 'register') {
      history.push('/register');
    }
  }, [message]);

  return (
    <div>
      <MainHeader />
      <Banner />
      <NavBar />
    </div>
  );
}

export default MainPage;
