import * as React from 'react';
import { useState } from 'react';
import Banner from '@components/Banner';
import NavBar from '@components/NavBar/index';
import FreeBoardPage from '@pages/FreeBoardPage';
import QuestionBoardPage from '@pages/QuestionBoardPage';
import RecruitBoardPage from '@pages/RecruitBoardPage';
import Footer from '@components/Footer/index';

function MainPage(): JSX.Element {
  const [selectTab, setSelectTab] = useState(0);
  return (
    <>
      <Banner />
      <NavBar selectTab={selectTab} setSelectTab={setSelectTab} />
      {selectTab === 0 && <RecruitBoardPage />}
      {selectTab === 1 && <QuestionBoardPage />}
      {selectTab === 2 && <FreeBoardPage />}
      <Footer />
    </>
  );
}

export default MainPage;
