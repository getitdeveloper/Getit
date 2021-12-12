import * as React from 'react';
import { ContentContainer } from '@assets/styles/page';
import PostItem from '@components/PostItem';
import MarkdownRenderer from '@components/MarkdownRenderer';
import { Stack } from '@assets/styles/commons';
import { Content, StacksWrapper } from './styles';

function PostDetail({ post }: { post: any }): JSX.Element {
  return (
    <ContentContainer>
      <PostItem content={post} />
      <Content>
        <MarkdownRenderer text={post.content} open />
      </Content>
      <StacksWrapper>
        {post.stack.map((content: string) => (
          <Stack key={content}>#{content}</Stack>
        ))}
      </StacksWrapper>
    </ContentContainer>
  );
}

export default PostDetail;
