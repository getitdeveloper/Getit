import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PostItem from '@components/PostItem';
import PostSubHeader from '@components/PostSubHeader';
import {
  PageWrapper,
  PageBackground,
  ContentContainer,
} from '@assets/styles/page';
import { COMMON_POST_LIST_REQUEST } from '@reducers/actions';
import Paging from '@components/Paging';
import LoadingSpinner from '@components/LoadingSpinner';
import { IPost } from '@types';

function QuestionBardPage(): JSX.Element {
  const dispatch = useDispatch();
  const boardList = useSelector(
    (state: RootStateOrAny) => state.postList.commonPostList,
  );
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    dispatch({
      type: COMMON_POST_LIST_REQUEST,
      data: {
        page: String(page),
        category: 'question',
      },
    });
  }, [page]);

  console.log('page number: ', page);
  if (!boardList) {
    return <LoadingSpinner />;
  }
  return (
    <PageBackground>
      <PostSubHeader boardType='Question' />
      <PageWrapper>
        {boardList ? (
          <ContentContainer>
            {boardList.results.map((content: IPost) => (
              <PostItem
                key={content.id}
                content={content}
                boardType='question'
              />
            ))}
          </ContentContainer>
        ) : null}
        <Paging
          activePage={page}
          totalPage={boardList.count}
          setPage={setPage}
        />
      </PageWrapper>
    </PageBackground>
  );
}

export default QuestionBardPage;
