import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  li {
    font-size: 1.6rem;
    padding: 0 0.8rem;
  }

  @media ${({ theme }) => theme.tablet} {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;
