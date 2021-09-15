import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

function SearchResultPage(): JSX.Element {
  const searchResult = useSelector(
    (state: RootStateOrAny) => state.board.searchPostList,
  );

  return (
    <div>
      <div>모집 게시판</div>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
      <div>질문 게시판</div>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
      <div>자유 게시판</div>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  );
}

export default SearchResultPage;
