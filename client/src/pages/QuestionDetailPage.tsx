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

function QuestionDetailPage(): JSX.Element {
  const dispatch = useDispatch();
  const { postId }: IPostId = useParams();
  const questionPost = useSelector(
    (state: RootStateOrAny) => state.post.commonPost,
  );

  useEffect(() => {
    dispatch({
      type: COMMON_POST_REQUEST,
      data: {
        id: postId,
      },
    });
  }, []);

  if (!questionPost) {
    return <LoadingSpinner />;
  }
  return (
    <PageBackground>
      <PageWrapper>
        <PageTitle>질문 게시판</PageTitle>
        <PostDetail post={questionPost} />
        <Comments boardId={postId} />
      </PageWrapper>
      <Footer />
    </PageBackground>
  );
}

export default QuestionDetailPage;
