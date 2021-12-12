import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 2px solid #e4e8eb;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem 1rem;
`;

export const Notice = styled.div`
  display: flex;
  margin: 1rem 0;
  h3 {
    width: 100px;
    margin-right: 1rem;
    font-weight: bold;
    font-size: 1.4rem;
  }
  a {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: #777;
    &:hover {
      color: #000000;
      text-decoration: underline;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
  }
`;

export const Participants = styled.div`
  display: flex;
  margin: 1rem 0;
  h3 {
    width: 100px;
    margin-right: 1rem;
    font-weight: bold;
    font-size: 1.4rem;
  }
  div {
    display: flex;
    align-items: center;
    p {
      margin-right: 0.5rem;
      font-size: 1.6rem;
      color: #777;

      &::after {
        content: ' : ';
      }

      @media ${({ theme }) => theme.mobile} {
        &::after {
          content: none;
        }
        padding: 0.3rem 0;
      }
    }

    a {
      font-size: 1.5rem;
      text-decoration: none;
      color: #777;
      margin: 0.2rem 0.5rem 0.2rem 0;

      &:hover {
        color: #000000;
        text-decoration: underline;
      }
    }
  }

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
  }
`;
