import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PostItem from '@components/PostItem';
import PostSubHeader from '@components/PostSubHeader';
import { COMMON_POST_LIST_REQUEST } from '@reducers/actions';
import {
  PageContainer,
  PageContainer1,
  PageBackground,
} from '@assets/styles/page';
import Paging from '@components/Paging';
import LoadingSpinner from '@components/LoadingSpinner';
import { IPost } from '@types';

function FreeBoardPage(): JSX.Element {
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
        category: 'free',
      },
    });
  }, [page]);

  console.log('page number: ', page);
  if (!boardList) {
    return <LoadingSpinner />;
  }

  return (
    <PageBackground>
      <PostSubHeader boardType='Free' />
      <PageContainer1>
        <PageContainer width='100%'>
          {boardList.results.map((content: IPost) => (
            <PostItem key={content.id} content={content} boardType='free' />
          ))}
        </PageContainer>
        <Paging
          activePage={page}
          totalPage={boardList.count}
          setPage={setPage}
        />
      </PageContainer1>
    </PageBackground>
  );
}

export default FreeBoardPage;
