import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PostItem from '@components/PostItem';
import PostSubHeader from '@components/PostSubHeader';
import { COMMON_POST_LIST_REQUEST } from '@reducers/actions';
import {
  ContentContainer,
  PageWrapper,
  PageBackground,
} from '@assets/styles/page';
import Paging from '@components/Paging';
import LoadingSpinner from '@components/LoadingSpinner';
import { IPost } from '@types';
import Footer from '@components/Footer/index';

function FreeBoardPage(): JSX.Element {
  const dispatch = useDispatch();
  const boardList = useSelector(
    (state: RootStateOrAny) => state.postList.commonPostList,
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({
      type: COMMON_POST_LIST_REQUEST,
      data: {
        page: String(page),
        category: 'free',
      },
    });
  }, [page]);

  return (
    <PageBackground>
      <PostSubHeader boardType='Free' />
      <PageWrapper>
        {boardList ? (
          <ContentContainer>
            {boardList?.results.map((content: IPost) => (
              <PostItem key={content.id} content={content} boardType='free' />
            ))}
          </ContentContainer>
        ) : (
          <LoadingSpinner />
        )}
        <Paging
          activePage={page}
          totalPage={boardList?.count}
          setPage={setPage}
        />
      </PageWrapper>
      <Footer />
    </PageBackground>
  );
}

export default FreeBoardPage;
