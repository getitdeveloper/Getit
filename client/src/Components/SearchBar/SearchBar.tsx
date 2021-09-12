import * as React from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SearchBarStyles, {
  SearchBarWrapper,
  SearchBarInput,
  SearchIconWrapper,
} from './styles';

function SearchBar(): JSX.Element {
  const classes = SearchBarStyles();

  return (
    <SearchBarWrapper>
      <SearchBarInput>
        <SearchIconWrapper>
          <SearchIcon fontSize='large' />
        </SearchIconWrapper>
        <InputBase
          placeholder='검색어를 입력하세요'
          classes={{
            root: classes.inputRoot,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </SearchBarInput>
    </SearchBarWrapper>
  );
}

export default SearchBar;
