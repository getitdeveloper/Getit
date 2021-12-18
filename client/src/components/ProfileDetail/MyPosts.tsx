import * as React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PostItem from '@components/PostItem';
import { MY_POST_LIST_REQUEST } from '@reducers/actions';
import { IPost } from '@types';
import LoadingSpinner from '@components/LoadingSpinner';
import NavBar from '@components/NavBar';
import Paging from '@components/Paging';
import { ProfileRight, PostWrapper } from './styles';

const CategoryType: any = {
  0: 'recruit',
  1: 'question',
  2: 'free',
};

function MyPosts(): JSX.Element {
  const history = useHistory();
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );
  const myPosts = useSelector(
    (state: RootStateOrAny) => state.postList.myPostList,
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [selectTab, setSelectTab] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('question');
  const onHandlePost = (postId: number, category: string) =>
    history.push(`/${category}Board/${postId}`);

  useLayoutEffect(() => {
    setCurrentCategory(CategoryType[selectTab]);
  }, [selectTab]);

  useEffect(() => {
    // 질문/자유 게시글 목록 요청
    if (selectTab === 1 || selectTab === 2) {
      dispatch({
        type: MY_POST_LIST_REQUEST,
        data: {
          user: userId,
          category: currentCategory,
          page: String(page),
        },
      });
    } else {
      // 모집 게시글 목록 요청
      dispatch({
        type: MY_POST_LIST_REQUEST,
        data: {
          user: userId,
          category: currentCategory,
          page: String(page),
        },
      });
    }
  }, [currentCategory, page]);

  if (!myPosts) {
    return <LoadingSpinner />;
  }

  return (
    <ProfileRight>
      <NavBar selectTab={selectTab} setSelectTab={setSelectTab} />
      {myPosts.results.map((content: IPost) => (
        <PostWrapper
          key={content.id}
          onClick={() => onHandlePost(content.id, content.category)}
        >
          <PostItem content={content} />
        </PostWrapper>
      ))}
      <Paging activePage={page} totalPage={myPosts.count} setPage={setPage} />
    </ProfileRight>
  );
}
export default MyPosts;
