import * as React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import MainHeader from '../Components/MainHeader/MainHeader';
import NavBar from '../Components/Commons/NavBar/NavBar';

function MainPage(): JSX.Element {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const currentUser = user.user;
  console.log(currentUser);

  const styles = {
    padding: '48px',
    border: '1px solid black',
    margin: '16px',
  };

  return (
    <div>
      <MainHeader />
      <Banner />
      <NavBar />
      <div>
        {user.user && user.user.message === 'login' ? (
          <div>
            <div style={styles}>block1</div>
            <div style={styles}>block2</div>
            <div style={styles}>block3</div>
            <div style={styles}>block4</div>
            <div style={styles}>block5</div>
            <div style={styles}>block6</div>
            <div style={styles}>block7</div>
          </div>
        ) : (
          <Link to='/signupform' />
        )}
      </div>
    </div>
  );
}

export default MainPage;
