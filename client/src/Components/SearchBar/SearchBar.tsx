import * as React from 'react';
import { useCallback, useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import { SEARCH_POST_REQUEST } from '@reducers/actions';
import { SearchBarWrapper, SearchIconWrapper } from './styles';

function SearchBar(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const [search, setSearch] = useState('');

  const handleSearch = useCallback(
    (event) => {
      setSearch(event.target.value);
    },
    [search],
  );

  // 검색 결과 페이지에서 이동시 state 초기화
  useEffect(() => {
    if (pathname !== '/searchResult') {
      setSearch('');
    }
  }, [pathname]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch({
        type: SEARCH_POST_REQUEST,
        data: search,
      });

      if (search === '') {
        return alert('검색어를 입력하세요.');
      }
      inputRef.current?.blur();
      return history.push('/searchResult');
    },

    [search],
  );

  return (
    <SearchBarWrapper>
      <form onSubmit={handleSubmit}>
        <SearchIconWrapper>
          <SearchIcon fontSize='large' />
        </SearchIconWrapper>
        <input
          type='text'
          placeholder='검색어를 입력하세요.'
          value={search}
          onChange={handleSearch}
          ref={inputRef}
        />
      </form>
    </SearchBarWrapper>
  );
}

export default SearchBar;
