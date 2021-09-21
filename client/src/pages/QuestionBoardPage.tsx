import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PostItem from '@components/PostItem';
import PostSubHeader from '@components/PostSubHeader';
import { PageContainer, PageBackground } from '@assets/styles/page';
import { COMMON_BOARD_REQUEST } from '@reducers/actions';
import Paging from '@components/Paging';
import LoadingSpinner from '@components/LoadingSpinner';
import { IPost, ISelectTab } from '@types';

function QuestionBardPage({ selectTab }: ISelectTab): JSX.Element {
  const dispatch = useDispatch();
  const boardList = useSelector(
    (state: RootStateOrAny) => state.board.boardList,
  );
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    dispatch({
      type: COMMON_BOARD_REQUEST,
      data: {
        page: String(page),
        category: 'question',
      },
    });
  }, [page]);

  console.log('page number: ', page);
  console.log('questionBoard: ', boardList);
  if (!boardList) {
    return <LoadingSpinner />;
  }
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <PostSubHeader boardType='Question' selectTab={selectTab} />
      <PageBackground>
        {boardList ? (
          <PageContainer width='80%'>
            {boardList.results.map((content: IPost) => (
              <PostItem
                key={content.id}
                content={content}
                boardType='Question'
              />
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

export default QuestionBardPage;
