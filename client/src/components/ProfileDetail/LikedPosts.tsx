import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { LIKED_POST_LIST_REQUEST } from '@reducers/actions';
import PostItem from '@components/PostItem';
import { ILikedPost, IPost, IRecruitPost } from '@types';
import LoadingSpinner from '@components/LoadingSpinner';
import NavBar from '@components/NavBar';
import Paging from '@components/Paging';
import { ProfileRight, PostWrapper } from './styles';

const CategoryType: any = {
  0: 'recruit',
  1: 'question',
  2: 'free',
};

function LikedPosts(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );
  const selectedTab = useSelector(
    (state: RootStateOrAny) => state.navbarTab.selectTab,
  );
  const likedPosts = useSelector(
    (state: RootStateOrAny) => state.postList.likedPostList,
  );
  const [page, setPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('recruit');
  const onHandlePost = (postId: number, category: string) =>
    history.push(`/${category}Board/${postId}`);

  useLayoutEffect(() => {
    setCurrentCategory(CategoryType[selectedTab]);
  }, [selectedTab]);

  useEffect(() => {
    // 질문/자유 게시글 목록 요청
    if (selectedTab === 1 || selectedTab === 2) {
      dispatch({
        type: LIKED_POST_LIST_REQUEST,
        data: {
          user: userId,
          category: currentCategory,
          page: String(page),
        },
      });
    } else {
      // 모집 게시글 목록 요청
      dispatch({
        type: LIKED_POST_LIST_REQUEST,
        data: {
          user: userId,
          category: currentCategory,
          page: String(page),
        },
      });
    }
  }, [currentCategory, page, selectedTab]);

  if (!likedPosts) {
    return <LoadingSpinner />;
  }

  return (
    <ProfileRight>
      <NavBar />
      {likedPosts.results[0]?.recruitpost &&
        likedPosts.results.map((content: { recruitpost: IRecruitPost }) => (
          <PostWrapper
            key={content.recruitpost.id}
            onClick={() => onHandlePost(content.recruitpost.id, 'recruit')}
          >
            <PostItem content={content.recruitpost} boardType='recruit' />
          </PostWrapper>
        ))}

      {likedPosts.results[0]?.commonpost &&
        likedPosts.results.map((content: { commonpost: IPost }) => (
          <PostWrapper
            key={content.commonpost.id}
            onClick={() =>
              onHandlePost(content.commonpost.id, content.commonpost.category)
            }
          >
            <PostItem content={content.commonpost} />
          </PostWrapper>
        ))}
      <Paging
        activePage={page}
        totalPage={likedPosts.count}
        setPage={setPage}
      />
    </ProfileRight>
  );
}

export default LikedPosts;
