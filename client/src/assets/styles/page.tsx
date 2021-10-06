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
  width: 78%;
  padding-top: 3.5rem;
  padding-bottom: 1rem;
  font-size: 1.2rem;
  text-align: left;
  color: ${(props) => props.theme.colors.blackText};
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

export const BlockWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  border-radius: 0.8rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: ${(props: Size) => (props.padding ? props.padding : '4.5rem')};
  margin-bottom: 4.5rem;
  margin-top: 1rem;

  @media ${(props) => props.theme.tablet} {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    margin: 0;
    border-radius: 0;
    padding-top: 2.5rem;
  }
`;
