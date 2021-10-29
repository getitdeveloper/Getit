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
  min-height: 845px;
  padding: 1rem 1rem;
  background-color: ${(props) => props.theme.colors.background};

  @media ${(props) => props.theme.tablet} {
    min-height: 400px;
    width: 100%;
    background-color: white;
    padding: 0;
  }
`;

export const PageTitle = styled.h1`
  width: 100%;
  padding: 3.5rem 3rem 1rem 3rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.blackText};
`;

export const ContentContainer = styled.div`
  max-width: 128rem;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  height: auto;
  padding: 3rem 2rem;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 4.5rem;
  margin-top: 1rem;

  @media ${({ theme }) => theme.tablet} {
    padding: 3rem 0;
  }
`;
