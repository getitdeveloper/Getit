import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import NoneMessage from '@components/NoneMessage';
import MoreButton from '@components/MoreButton';

function QuestionBoardPage(): JSX.Element {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const boardList = useSelector(
    (state: RootStateOrAny) => state.postList.commonPostList,
  );
  const commonPostLikeStatus = useSelector(
    (state: RootStateOrAny) => state.post.commonPostLikeSuccess,
  );
  const filterStatus = useSelector(
    (state: RootStateOrAny) => state.postList.filterStatus,
  );
  const searchQuestionList = useSelector(
    (state: RootStateOrAny) => state.postList.searchPostList?.questionboard,
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({
      type: COMMON_POST_LIST_REQUEST,
      data: {
        page,
        category: 'question',
        filterStatus,
      },
    });
  }, [page, filterStatus, commonPostLikeStatus]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (!boardList) {
    return <LoadingSpinner />;
  }

  return (
    <PageBackground>
      {/* 검색 결과페이지와 일반 게시글 페이지와 렌더링 구분 */}
      {pathname === '/searchResult' ? (
        // 검색 결과 페이지
        <>
          <PageWrapper pathname={pathname}>
            {searchQuestionList === null ||
            searchQuestionList === undefined ||
            searchQuestionList.length < 1 ? (
              <NoneMessage text='검색 결과가 없습니다.' />
            ) : (
              <ContentContainer>
                {searchQuestionList.map((content: IPost, index: number) => (
                  <PostItem
                    key={content.id}
                    content={content}
                    boardType='question'
                    index={index}
                    length={searchQuestionList.length}
                  />
                ))}
              </ContentContainer>
            )}
            {searchQuestionList?.length > 1 && <MoreButton />}
          </PageWrapper>
        </>
      ) : (
        // 일반 모집게시판 페이지
        <>
          <PostSubHeader boardType='question' />
          <PageWrapper pathname={pathname}>
            <ContentContainer>
              {boardList.results?.map((content: IPost, index: number) => (
                <PostItem
                  key={content.id}
                  content={content}
                  boardType='question'
                  index={index}
                  length={boardList.results.length}
                />
              ))}
            </ContentContainer>
            <Paging
              activePage={page}
              totalPage={boardList?.count}
              setPage={setPage}
            />
          </PageWrapper>
          <Footer />
        </>
      )}
    </PageBackground>
  );
}

export default QuestionBoardPage;
