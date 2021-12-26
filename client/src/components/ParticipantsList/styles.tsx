import styled from 'styled-components';

export const BoxContainer = styled.ul`
  border: 1px solid #bcbcbc;
  min-height: 7rem;
  display: flex;
  align-items: center;
  border-radius: 1.2rem;
  list-style: none;
  flex-wrap: wrap;
  margin: 1rem 0rem;
`;

export const UserContainer = styled.li`
  margin: 1rem;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 1.7rem;
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    text-align: center;
  }

  img {
    width: 2rem;
  }
  span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }
`;
