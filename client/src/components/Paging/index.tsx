import * as React from 'react';
import Pagination from 'react-js-pagination';
import './styles.css';

function Paging({ activePage, totalPage, setPage }: any): JSX.Element {
  const onHandleChange = (page: number) => {
    setPage(page);
    console.log(page);
  };
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={12}
      totalItemsCount={totalPage}
      pageRangeDisplayed={5}
      prevPageText='‹'
      nextPageText='›'
      onChange={onHandleChange}
    />
  );
}

export default Paging;
