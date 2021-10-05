import * as React from 'react';
import PostForm from '@components/PostForm';
import { PageWrapper, BlockWrapper, PageTitle } from '@assets/styles/page';

function RecruitFormPage(): JSX.Element {
  return (
    <PageWrapper>
      <PageTitle>스터디 모집 글 작성</PageTitle>
      <BlockWrapper padding='3%'>
        <PostForm />
      </BlockWrapper>
    </PageWrapper>
  );
}

export default RecruitFormPage;
