import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import parse, { domToReact, DOMNode } from 'html-react-parser';
import React from 'react';

const RandomBlock = () => {
  const [textBlock, setTextBlock] = useState<React.ReactElement | null>(null);
  const [author, setAuthor] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');

  useEffect(() => {
    const fetchTextBlocks = async () => {
      const response = await fetch('/api/channel');
      const data = await response.json();
      const textBlocks = data.contents.filter((block: any) => block.class === 'Text');
      const randomIndex = Math.floor(Math.random() * textBlocks.length);
      const randomTextBlock = textBlocks[randomIndex];
      const sanitizedContent = DOMPurify.sanitize(randomTextBlock.content_html);

      // Parse the sanitized HTML and convert it to React elements
      const reactNodes = parse(sanitizedContent, {
        replace: (domNode) => {
          if (domNode.type === 'tag' && domNode.name === 'script') {
            return null; // Remove any remaining script tags
          }
          if (domNode.type === 'comment') {
            return null; // Ignore comment nodes
          }
          return domToReact(domNode as DOMNode, {
            replace: (node) =>
              node.attribs && node.children
                ? node.children.map((child) => child.data).join('')
                : null,
          });
        },
      });

      // Create a single React element from the array of nodes
      const reactElement = React.createElement('div', null, ...reactNodes);

      setTextBlock(reactElement);
      setAuthor(randomTextBlock.user.username);
      setSourceUrl(randomTextBlock.source?.url || '');
    };

    fetchTextBlocks();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-2xl p-8 bg-white text-2xl font-serif">{textBlock}</div>
      <div className="mt-4 text-sm text-gray-700">{author}</div>
      {sourceUrl && (
        <div className="mt-2 text-center">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-500 hover:underline"
            aria-label="Source"
          >
            Source
          </a>
        </div>
      )}
    </div>
  );
};

export default RandomBlock;