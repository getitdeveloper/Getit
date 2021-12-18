import React, { useState, useEffect } from 'react';
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
import Footer from '@components/Footer/index';

function QuestionBoardPage(): JSX.Element {
  const dispatch = useDispatch();
  const boardList = useSelector(
    (state: RootStateOrAny) => state.postList.commonPostList,
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({
      type: COMMON_POST_LIST_REQUEST,
      data: {
        page,
        category: 'question',
      },
    });
  }, [page]);

  return (
    <PageBackground>
      <PostSubHeader boardType='Question' />
      <PageWrapper>
        {boardList ? (
          <ContentContainer>
            {boardList?.results.map((content: IPost, index: number) => (
              <PostItem
                key={content.id}
                content={content}
                boardType='question'
                index={index}
                length={boardList.results.length}
              />
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

export default QuestionBoardPage;
