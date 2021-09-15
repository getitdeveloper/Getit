import * as React from 'react';

import { Nav, StyledLink } from './styles';

function HeaderNav(): JSX.Element {
  return (
    <Nav>
      <li>
        <StyledLink to='/recruitBoard'>스터디 모집 게시판</StyledLink>
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
