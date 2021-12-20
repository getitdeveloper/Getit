import React from 'react';
import { useLocation } from 'react-router-dom';
import { PageBackground, PageWrapper, PageTitle } from '@assets/styles/page';
import Footer from '@components/Footer/index';
import RecruitBoardPage from '@pages/RecruitBoardPage';
import QuestionBoardPage from '@pages/QuestionBoardPage';
import FreeBoardPage from '@pages/FreeBoardPage';

function SearchResultPage(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <PageBackground>
      <PageWrapper pathname={pathname}>
        <PageTitle>스터디모집</PageTitle>
        <RecruitBoardPage />
        <PageTitle>질문게시판</PageTitle>
        <QuestionBoardPage />
        <PageTitle>자유게시판</PageTitle>
        <FreeBoardPage />
      </PageWrapper>
      <Footer />
    </PageBackground>
  );
}

export default SearchResultPage;
