import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PostItem from '../../Components/PostItem';
import PostSubHeader from '../../Components/PostSubHeader';
import { PageContainer, PageBackground } from '../../styles/page';
import { COMMON_BOARD_REQUEST } from '../../reducers/actions';
import { IPost } from '../../types';
import Paging from '../../Components/Paging';
import LoadingSpinner from '../../Components/LoadingSpinner';

function QuestionBardPage() {
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
    <div>
      <PostSubHeader boardType='Question' />
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
