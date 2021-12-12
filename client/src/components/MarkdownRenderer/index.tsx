import React from 'react';
// import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { IMarkdownRenderer } from './types';
import { StyledReactMarkdown } from './styles';

function CodeBlock({ inline, className, children }: any) {
  const value = children;
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter language={match[1]} PreTag='div'>
      {String(value).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className}>{value}</code>
  );
}

function MarkdownRenderer({
  text,
  open,
}: IMarkdownRenderer): JSX.Element | null {
  if (open) {
    return (
      <StyledReactMarkdown
        components={{
          code: CodeBlock,
        }}
        remarkPlugins={[remarkGfm]}
      >
        {text}
      </StyledReactMarkdown>
    );
  }
  return null;
}

export default MarkdownRenderer;
