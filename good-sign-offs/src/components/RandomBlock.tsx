// RandomBlock.tsx
import React, { useState, useEffect } from "react";

interface TextBlock {
  class: string;
  content_html: string;
  user: {
    username: string;
  };
  source?: {
    url: string;
  };
}

const RandomBlock = () => {
  const [textContent, setTextContent] = useState("");
  const [author, setAuthor] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");

  useEffect(() => {
    const fetchTextBlocks = async () => {
      try {
        const response = await fetch("/api/channel");
        const data = await response.json();
        const textBlocks = data.contents.filter(
          (block: TextBlock) => block.class === "Text"
        );
        const randomIndex = Math.floor(Math.random() * textBlocks.length);
        const randomTextBlock = textBlocks[randomIndex];

        setTextContent(randomTextBlock.content_html);
        setAuthor(randomTextBlock.user?.username || "");
        setSourceUrl(randomTextBlock.source?.url || "");
      } catch (error) {
        console.error("Error fetching text blocks:", error);
      }
    };
    if (typeof window !== "undefined") {
      fetchTextBlocks();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className="max-w-2xl p-8 bg-white text-2xl font-serif"
        dangerouslySetInnerHTML={{ __html: textContent }}
      />
      {author && <div className="mt-4 text-sm text-gray-700">{author}</div>}
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
