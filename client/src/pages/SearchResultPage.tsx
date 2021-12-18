import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import Footer from '@components/Footer/index';

function SearchResultPage(): JSX.Element {
  const searchResult = useSelector(
    (state: RootStateOrAny) => state.postList.searchPostList,
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
      <Footer />
    </div>
  );
}

export default SearchResultPage;
