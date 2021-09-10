import * as React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import MainHeader from '../../Components/MainHeader/MainHeader';
import Banner from '../../Components/Banner/Banner';
import NavBar from '../../Components/Commons/NavBar';

function MainPage(): JSX.Element {
  const history = useHistory();

  const message = useSelector((state: RootStateOrAny) => state.user.id.message);
  const userId = useSelector((state: RootStateOrAny) => state.user.id.user_pk);

  useEffect(() => {
    if (message === 'register') {
      return history.push('/register');
    }
  }, [message]);

  useEffect(() => {
    if (userId) {
      axios
        .get(`/api/profile/${userId}`)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }
  }, [userId]);

  useEffect(() => {
    axios
      .get('/')
      .then((res) => console.log('서버상태 ===> ', res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <MainHeader />
      <Banner />
      <NavBar />
    </div>
  );
}

export default MainPage;
