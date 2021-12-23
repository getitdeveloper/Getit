import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  SearResultPageBackground,
  ContentWrapper,
  PageWrapper,
  PageTitle,
} from '@assets/styles/page';
import Footer from '@components/Footer/index';
import RecruitBoardPage from '@pages/RecruitBoardPage';
import QuestionBoardPage from '@pages/QuestionBoardPage';
import FreeBoardPage from '@pages/FreeBoardPage';

function SearchResultPage(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <SearResultPageBackground>
      <PageWrapper pathname={pathname}>
        <ContentWrapper>
          <PageTitle>스터디모집</PageTitle>
          <RecruitBoardPage />
        </ContentWrapper>
        <ContentWrapper>
          <PageTitle>질문게시판</PageTitle>
          <QuestionBoardPage />
        </ContentWrapper>
        <ContentWrapper>
          <PageTitle>자유게시판</PageTitle>
          <FreeBoardPage />
        </ContentWrapper>
      </PageWrapper>
      <Footer />
    </SearResultPageBackground>
  );
}

export default SearchResultPage;
