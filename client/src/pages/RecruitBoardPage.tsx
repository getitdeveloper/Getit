import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import PostSubHeader from '@components/PostSubHeader';
import RecruitPost from '@components/RecruitPost/index';
import { PageBackground, PageWrapper } from '@assets/styles/page';
import Footer from '@components/Footer/index';
import LoadingSpinner from '@components/LoadingSpinner';
import { RECRUIT_POST_LIST_REQUEST } from '@reducers/actions';
import Paging from '@components/Paging';
import NoneMessage from '@components/NoneMessage/index';
import MoreButton from '@components/MoreButton';

function RecruitBoardPage(): JSX.Element {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const recruitPostList = useSelector(
    (state: RootStateOrAny) => state.postList.recruitPostList?.results,
  );
  const recruitPostTotalCount = useSelector(
    (state: RootStateOrAny) => state.postList.recruitPostList?.count,
  );
  const filterStatus = useSelector(
    (state: RootStateOrAny) => state.postList.filterStatus,
  );
  const searchRecruitList = useSelector(
    (state: RootStateOrAny) => state.postList.searchPostList?.recruitboard,
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({
      type: RECRUIT_POST_LIST_REQUEST,
      data: {
        page,
        filterStatus,
      },
    });
  }, [page, filterStatus]);

  if (!recruitPostList) {
    return <LoadingSpinner />;
  }

  return (
    <PageBackground>
      {/* 검색 결과페이지와 일반 게시글 페이지와 렌더링 구분 */}
      {pathname === '/searchResult' ? (
        // 검색 결과 페이지
        <PageWrapper pathname={pathname}>
          {searchRecruitList === null ||
          searchRecruitList === undefined ||
          searchRecruitList.length < 1 ? (
            <NoneMessage text='검색 결과가 없습니다.' />
          ) : (
            <RecruitPost postList={searchRecruitList} />
          )}
          {searchRecruitList?.length > 1 && <MoreButton />}
        </PageWrapper>
      ) : (
        // 일반 모집게시판 페이지
        <>
          <PostSubHeader boardType='recruit' />
          <PageWrapper pathname={pathname}>
            <RecruitPost postList={recruitPostList} />
            <Paging
              activePage={page}
              totalPage={recruitPostTotalCount}
              setPage={setPage}
            />
          </PageWrapper>
          <Footer />
        </>
      )}
    </PageBackground>
  );
}

export default RecruitBoardPage;
