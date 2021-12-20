import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { SEARCH_POST_LIST_REQUEST } from '@reducers/actions';
import { SearchBarForm, SearchIconWrapper } from './styles';
import { ISearchBar } from './types';

function SearchBar({ maxWidth }: ISearchBar): JSX.Element {
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
      if (search === '') {
        return alert('검색어를 입력하세요.');
      }
      dispatch({
        type: SEARCH_POST_LIST_REQUEST,
        data: search,
        history,
      });
      inputRef.current?.blur();
    },
    [search],
  );

  return (
    <SearchBarForm onSubmit={handleSubmit} maxWidth={maxWidth}>
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
    </SearchBarForm>
  );
}

export default SearchBar;
