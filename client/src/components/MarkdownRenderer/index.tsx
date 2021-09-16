import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

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

function MarkdownRenderer(props: any) {
  const { text, open } = props;
  if (open) {
    return (
      <ReactMarkdown
        components={{
          code: CodeBlock,
        }}
        remarkPlugins={[remarkGfm]}
      >
        {text}
      </ReactMarkdown>
    );
  }
  return null;
}

export default MarkdownRenderer;
