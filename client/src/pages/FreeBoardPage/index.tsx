import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from 'react-js-pagination';
import SubHeader from '../../Components/Commons/SubHeader/SubHeader';
import PostItem from '../../Components/PostItem';
import PostSubHeader from '../../Components/PostSubHeader';
import { COMMON_BOARD_REQUEST } from '../../reducers/actions';
import { PageContainer, PageBackground } from '../../styles/page';
import { IPost } from '../../types';
import Paging from '../../Components/Paging';

interface HeaderProp {
  header?: boolean;
}

const defaultProp: HeaderProp = {
  header: true,
};

function FreeBoardPage(props: HeaderProp) {
  const dispatch = useDispatch();
  const boardList = useSelector(
    (state: RootStateOrAny) => state.board.BoardList,
  );
  const [page, setPage] = React.useState(1);
  const { header } = props;

  React.useEffect(() => {
    dispatch({
      type: COMMON_BOARD_REQUEST,
      data: {
        page: String(page),
        category: 'free',
      },
    });
  }, [page]);

  console.log('page number: ', page);
  console.log('freeBoard: ', boardList);
  if (!boardList) {
    return <CircularProgress />;
  }

  return (
    <div>
      {header ? <SubHeader /> : null}

      <PageBackground>
        <PostSubHeader boardType='Free' />
        {boardList ? (
          <PageContainer width='80%'>
            {boardList.results.map((content: IPost) => (
              <PostItem key={content.id} content={content} boardType='Free' />
            ))}
          </PageContainer>
        ) : null}
        <Paging
          activePage={page}
          totalPage={boardList.count}
          setPage={setPage}
        />
      </PageBackground>
    </div>
  );
}

FreeBoardPage.defaultProps = defaultProp;

export default FreeBoardPage;
