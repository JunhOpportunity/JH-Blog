"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import remarkGfm from "remark-gfm";

type Props = {
  params: {
    slug: string;
  };
};

export default function DetailPage({ params }: Props) {
  const [content, setContent] = useState("");
  const markdownPath = `./${params.slug}.md`;
  console.log(markdownPath)

  
  //import(markdownPath).then(response => {
  //  return response.text()
  //}).then(markdown => {
  //  console.log(markdown)
  //})
  //import(`../../../../data/posts/${params.slug}.md`).then(res =>
  //  console.log(res.text())
  //);

  //const markdownData = require(`./data/posts/${params.slug}.md`)
  return (
    <>
      <h1 className="font-bold text-center text-orange-600 text-2xl">{params.slug} 추후 제작 예정</h1>
      {/* <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} /> */}
    </>
  );
}
