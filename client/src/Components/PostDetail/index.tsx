import * as React from 'react';
import { PageContainer } from '../../styles/page';
import PostItem from '../PostItem';
import MarkdownRenderer from '../MarkdownRenderer';
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
