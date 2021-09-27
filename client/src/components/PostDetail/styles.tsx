import styled from 'styled-components';

export const Content = styled.div`
  height: 30rem;
  padding: 2rem;
  @media ${(props) => props.theme.tablet} {
    padding: 2rem 0rem;
  }
`;

export const StacksWrapper = styled.div`
  display: flex;
  padding-left: 2rem;
  flex-direction: row;
  flex-wrap: wrap;
`;
