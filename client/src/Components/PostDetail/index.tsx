import * as React from 'react';
import { PageContainer } from '@assets/styles/page';
import PostItem from '@components/PostItem';
import MarkdownRenderer from '@components/MarkdownRenderer';
import { Content } from './styles';

function PostDetail(props: any) {
  const { post } = props;

  return (
    <PageContainer width='80%'>
      <PostItem content={post} detail />
      <Content>
        <MarkdownRenderer text={post.content} open />
      </Content>
    </PageContainer>
  );
}

export default PostDetail;
