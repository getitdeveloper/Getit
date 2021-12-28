import styled from 'styled-components';

interface Size {
  width?: string;
  padding?: string;
}

export const PageBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  /* min-height: 100vh; */
`;

interface IPageWrapper {
  pathname?: string;
}

export const PageWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  /* min-height: 100vh; */
  min-height: ${({ pathname }: IPageWrapper) => {
    return pathname === '/searchResult' ? 'auto' : '100vh';
  }};
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};

  @media ${({ theme }) => theme.tablet} {
    padding: 0;
  }
`;

export const PageTitle = styled.h1`
  margin: 0 5rem;
  padding: 3.5rem 3rem 1rem 3rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.blackText};
  @media ${({ theme }) => theme.tablet} {
    margin: 0 0;
  }
`;

export const ContentContainer = styled.div`
  max-width: 128rem;
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
  /* min-height: 100vh; */
  height: auto;
  padding: 3rem 2rem;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 4.5rem;
  /* margin-top: 1rem; */

  @media ${({ theme }) => theme.tablet} {
    /* padding: 3rem 0; */
    min-height: initial;
    height: 100vh - 6.19rem;
    /* box-shadow: none; */
    margin-bottom: 0rem;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 3rem 0;
    width: 100%;
  }
`;

export const SearResultPageBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  min-height: 40vh;
`;
