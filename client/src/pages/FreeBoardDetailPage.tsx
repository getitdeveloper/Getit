import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { PageWrapper, PageTitle, PageBackground } from '@assets/styles/page';
import { COMMON_POST_REQUEST } from '@reducers/actions';
import PostDetail from '@components/PostDetail';
import Comments from '@components/Comments';
import LoadingSpinner from '@components/LoadingSpinner';
import { IPostId } from '@types';
import Footer from '@components/Footer/index';

function FreeBoardDetailPage(): JSX.Element {
  const dispatch = useDispatch();
  const { postId }: IPostId = useParams();
  const freePost = useSelector(
    (state: RootStateOrAny) => state.post.commonPost,
  );
  const commonPostLikeStatus = useSelector(
    (state: RootStateOrAny) => state.post.commonPostLikeSuccess,
  );

  useEffect(() => {
    dispatch({
      type: COMMON_POST_REQUEST,
      data: {
        id: postId,
      },
    });
  }, [commonPostLikeStatus]);

  if (!freePost) {
    return <LoadingSpinner />;
  }

  return (
    <PageBackground>
      <PageWrapper>
        <PageTitle>자유 게시판</PageTitle>
        <PostDetail post={freePost} />
        <Comments boardId={postId} />
      </PageWrapper>
      <Footer />
    </PageBackground>
  );
}

export default FreeBoardDetailPage;
