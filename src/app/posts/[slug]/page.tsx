"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default function DetailPage({ params }: Props) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/data/posts/${params.slug}.md`)
      .then((response) => {
        return response.text();
      })
      .then((data) => setContent(data));
  }, []);

  return (
    <>
      <div className="relative w-full h-80">
        <Image
          className="rounded-t-lg"
          src={`/images/posts/${params.slug}.png`}
          alt={`${params.slug}`}
          fill
        />
      </div>
      {content ? (
        <div className="flex justify-center items-center">
          <ReactMarkdown
            className="prose"
            children={content}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, "")}
                    style={a11yDark}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
