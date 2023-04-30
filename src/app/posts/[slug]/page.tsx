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

type Data = {
  title: string;
  description: string;
  date: string;
  path: string;
};

export default function DetailPage({ params }: Props) {
  const [content, setContent] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`/data/posts/${params.slug}.md`)
      .then((response) => {
        return response.text();
      })
      .then((data) => setContent(data));
    fetch(`/data/posts.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        data.map((a: Data) => {
          a.path == params.slug ? setData(a) : null;
        })
      );
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
        <div className="flex flex-col justify-center items-center bg-gray-200 p-5">
          <div className="mb-5">
            <h1 className="font-black text-right text-sky-600">{data.date}</h1>
            <h1 className="font-black text-4xl">{data.title}</h1>
            <h1 className="text-xs">{data.description}</h1>
          </div>
          <ReactMarkdown
            className="prose prose-pre:bg-transparent" 
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
