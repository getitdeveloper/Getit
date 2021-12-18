import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { LIKED_POST_LIST_REQUEST } from '@reducers/actions';
import PostItem from '@components/PostItem';
import { ILikedPost, IPost } from '@types';
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
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = user.profileInfo?.user_pk;
  const [page, setPage] = useState(1);
  const [selectTab, setSelectTab] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('question');
  const likedPosts = useSelector(
    (state: RootStateOrAny) => state.postList.likedPostList,
  );
  const onHandlePost = (postId: number, category: string) =>
    history.push(`/${category}Board/${postId}`);

  useLayoutEffect(() => {
    setCurrentCategory(CategoryType[selectTab]);
  }, [selectTab]);

  useEffect(() => {
    dispatch({
      type: LIKED_POST_LIST_REQUEST,
      data: {
        user: userId,
        category: currentCategory,
        page: String(page),
      },
    });
  }, [currentCategory, page]);

  if (!likedPosts) {
    return <LoadingSpinner />;
  }

  return (
    <ProfileRight>
      <NavBar selectTab={selectTab} setSelectTab={setSelectTab} />
      {likedPosts.results.map((content: any) => (
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
