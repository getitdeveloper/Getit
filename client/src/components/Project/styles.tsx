import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  @media ${({ theme }) => theme.mobile} {
    display: initial;
  }

  a {
    text-decoration: none;
    flex-basis: 25%;
  }
`;

export const ProjectContent = styled.div`
  min-width: 18rem;
  width: 18rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  color: #000000;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 2rem;
  font-size: 1.4rem;
  margin: 0 1rem;
  margin-top: 1rem;

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

export const None = styled.div`
  text-align: center;
  font-size: 1.6rem;
`;
