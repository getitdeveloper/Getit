import React, { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PostItem from '@components/PostItem';
import PostSubHeader from '@components/PostSubHeader';
import {
  ContentContainer,
  PageWrapper,
  PageBackground,
} from '@assets/styles/page';
import { COMMON_POST_LIST_REQUEST } from '@reducers/actions';
import Paging from '@components/Paging';
import LoadingSpinner from '@components/LoadingSpinner';
import { IPost } from '@types';
import Footer from '@components/Footer/index';
import NoneMessage from '@components/NoneMessage';
import MoreButton from '@components/MoreButton';

function FreeBoardPage(): JSX.Element {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const boardList = useSelector(
    (state: RootStateOrAny) => state.postList.commonPostList,
  );
  const filterStatus = useSelector(
    (state: RootStateOrAny) => state.postList.filterStatus,
  );
  const searchFreeList = useSelector(
    (state: RootStateOrAny) => state.postList.searchPostList?.freeboard,
  );

  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    dispatch({
      type: COMMON_POST_LIST_REQUEST,
      data: {
        page,
        category: 'free',
        filterStatus,
      },
    });
  }, [page, filterStatus]);

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
            {searchFreeList === null ||
            searchFreeList === undefined ||
            searchFreeList.length < 1 ? (
              <NoneMessage text='검색 결과가 없습니다.' />
            ) : (
              <ContentContainer>
                {searchFreeList.map((content: IPost, index: number) => (
                  <PostItem
                    key={content.id}
                    content={content}
                    boardType='free'
                    index={index}
                    length={searchFreeList.length}
                  />
                ))}
              </ContentContainer>
            )}
            {searchFreeList?.length > 1 && <MoreButton />}
          </PageWrapper>
        </>
      ) : (
        // 일반 모집게시판 페이지
        <>
          <PostSubHeader boardType='free' />
          <PageWrapper pathname={pathname}>
            <ContentContainer>
              {boardList.results?.map((content: IPost, index: number) => (
                <PostItem
                  key={content.id}
                  content={content}
                  boardType='free'
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

export default FreeBoardPage;
