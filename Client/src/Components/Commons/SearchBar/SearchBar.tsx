import * as React from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SearchBarCSS from './SearchBarCSS';

function SearchBar(): JSX.Element {
  const classes = SearchBarCSS();

  return (
    <div className={classes.box}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='검색어를 입력하세요'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
