import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  li {
    font-size: 1.6rem;
    padding: 0 0.8rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;
