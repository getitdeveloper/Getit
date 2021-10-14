import * as React from 'react';

import SearchBar from '@components/SearchBar/SearchBar';
import { Nav, StyledLink } from './styles';

function HeaderNav(): JSX.Element {
  return (
    <Nav>
      <li>
        <SearchBar maxWidth='36.75rem' />
      </li>
      <li>
        <StyledLink to='/recruitBoard'>스터디 모집</StyledLink>
      </li>
      <li>
        <StyledLink to='/questionBoard'>질문 게시판</StyledLink>
      </li>
      <li>
        <StyledLink to='/freeBoard'>자유 게시판</StyledLink>
      </li>
    </Nav>
  );
}

export default HeaderNav;
