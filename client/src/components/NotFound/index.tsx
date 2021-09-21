import * as React from 'react';

import { Link } from 'react-router-dom';
import { NotFoundWrapper } from './styles';

function NotFound(): JSX.Element {
  return (
    <NotFoundWrapper>
      <div>
        <h1>404 - Not Found</h1>
        <h1>페이지가 존재하지 않습니다.</h1>
        <p>링크를 잘못 입력하셨거나 페이지가 삭제/이동 되었을 수 있습니다.</p>
        <Link to='/'>
          <p>홈으로 돌아가기</p>
        </Link>
      </div>
    </NotFoundWrapper>
  );
}

export default NotFound;
