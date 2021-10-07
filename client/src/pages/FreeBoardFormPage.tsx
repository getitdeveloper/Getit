import * as React from 'react';
import PostForm from '@components/PostForm';
import {
  PageBackground,
  PageWrapper,
  BlockWrapper,
  PageTitle,
} from '@assets/styles/page';

function FreeBoardFormPage(): JSX.Element {
  // todo user_pk가 null일 경우 main page로 이동

  return (
    <PageBackground>
      <PageWrapper>
        <PageTitle>자유 게시글 작성</PageTitle>
        <BlockWrapper width='80%' padding='3%'>
          <PostForm />
        </BlockWrapper>
      </PageWrapper>
    </PageBackground>
  );
}

export default FreeBoardFormPage;
