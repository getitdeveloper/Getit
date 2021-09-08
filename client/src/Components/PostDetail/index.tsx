import * as React from 'react';
import { PageContainer } from '../../styles/page';
import PostItem from '../PostItem';
import MarkdownRenderer from '../MarkdownRenderer';

function PostDetail(props: any) {
  const { post } = props;
  console.log(post);
  return (
    <PageContainer width='80%'>
      <PostItem content={post} />
      <div style={{ height: '30rem', padding: '2%' }}>
        <MarkdownRenderer text={post.content} open />
      </div>
    </PageContainer>
  );
}

export default PostDetail;
