import * as React from 'react';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import SearchBarStyles, { SearchBarWrapper, SearchIconWrapper } from './styles';
import { SEARCH_POST_REQUEST } from '../../reducers/actions';

function SearchBar(): JSX.Element {
  const classes = SearchBarStyles();
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const handleSearch = useCallback(
    (event) => {
      setSearch(event.target.value);
    },
    [search],
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log('검색어 ==> ', search);
      dispatch({
        type: SEARCH_POST_REQUEST,
        data: search,
      });
    },
    [search],
  );

  return (
    <SearchBarWrapper>
      <SearchIconWrapper>
        <SearchIcon fontSize='large' />
      </SearchIconWrapper>
      <form onSubmit={handleSubmit}>
        <InputBase
          placeholder='검색어를 입력하세요'
          classes={{
            root: classes.inputRoot,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearch}
        />
      </form>
    </SearchBarWrapper>
  );
}

export default SearchBar;
