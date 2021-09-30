import * as React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { PageContainer } from '@assets/styles/page';
import PostItem from '@components/PostItem';
import MarkdownRenderer from '@components/MarkdownRenderer';
import { Stack } from '@assets/styles/commons';
import { Content, StacksWrapper } from './styles';

function PostDetail(props: any): JSX.Element {
  const { post } = props;

  return (
    <PageContainer width='80%'>
      <PostItem content={post} />
      <Content>
        <MarkdownRenderer text={post.content} open />
      </Content>
      <StacksWrapper>
        {post.stack.map((content: string) => (
          <Stack key={content}>#{content}</Stack>
        ))}
      </StacksWrapper>
    </PageContainer>
  );
}

export default PostDetail;
