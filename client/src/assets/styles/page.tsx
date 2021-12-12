import styled from 'styled-components';

interface Size {
  width?: string;
  padding?: string;
}

export const PageBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
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
  margin-top: 1rem;

  @media ${({ theme }) => theme.tablet} {
    padding: 3rem 0;
    min-height: initial;
    height: 100vh - 6.19rem;
    box-shadow: none;
  }
  @media ${({ theme }) => theme.mobile} {
    width: 98%;
  }
`;
