import styled from 'styled-components';

export const Content = styled.div`
  min-height: 30rem;
  padding: 2rem 1rem;
  font-size: 1.5rem;
  @media ${({ theme }) => theme.tablet} {
    padding: 2rem 0rem;
  }
`;

export const StacksWrapper = styled.div`
  display: flex;
  padding-left: 2rem;
  flex-direction: row;
  flex-wrap: wrap;
`;
