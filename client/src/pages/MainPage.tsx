import React, { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Banner from '@components/Banner';
import NavBar from '@components/NavBar/index';
import FreeBoardPage from '@pages/FreeBoardPage';
import QuestionBoardPage from '@pages/QuestionBoardPage';
import RecruitBoardPage from '@pages/RecruitBoardPage';
// import Footer from '@components/Footer/index';
import { USER_NICK_DOUBLECHECK_RESET } from '@reducers/actions';

function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const selectedTab = useSelector(
    (state: RootStateOrAny) => state.navbarTab.selectTab,
  );

  // 회원가입 중 뒤로가기 또는 로고를 클릭하여 메인페이지로 이동시 닉네임 중복 상태값 초기화
  useEffect(() => {
    dispatch({
      type: USER_NICK_DOUBLECHECK_RESET,
      data: {
        nickname: null,
      },
    });
  }, []);

  return (
    <>
      <Banner />
      <NavBar />
      {selectedTab === 0 && <RecruitBoardPage />}
      {selectedTab === 1 && <QuestionBoardPage />}
      {selectedTab === 2 && <FreeBoardPage />}
      {/* <Footer /> */}
    </>
  );
}

export default MainPage;
