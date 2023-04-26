"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import data from "../../../data/posts.json";

export default function Posts() {
  const [category, setCategory] = useState("");
  const onClickCategory = (select: string) => {
    setCategory(select);
  };
  return (
    <>
      <div className="flex p-5">
        <div className="w-3/5">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {data.map((postData) =>
              category != "" ? (
                postData.category == category ? (
                  <>
                    <Link
                      href={`/posts/${postData.path}`}
                      className="ease-in duration-300 hover:scale-105 flex flex-col text-center rounded-lg shadow-md shadow-black-100"
                    >
                      <div className="relative w-full h-40">
                        <Image
                          className="rounded-t-lg"
                          src={`/images/posts/${postData.path}.png`}
                          alt={`${postData.path}`}
                          fill
                        />
                      </div>

                      <div className="p-1">
                        <h1 className="text-right text-gray-500">
                          {postData.date}
                        </h1>
                        <h1 className="font-bold">{postData.title}</h1>
                        <h1 className="text-xs">{postData.description}</h1>
                        <div className="w-full flex justify-center items-center">
                          <div className="rounded-full bg-green-200 px-2 font-light">
                            {postData.category}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                ) : (
                  <></>
                )
              ) : (
                <>
                  <Link
                    href={`/posts/${postData.path}`}
                    className="ease-in duration-300 hover:scale-105 flex flex-col text-center rounded-lg shadow-md shadow-black-100"
                  >
                    <div className="relative w-full h-40">
                      <Image
                        className="rounded-t-lg"
                        src={`/images/posts/${postData.path}.png`}
                        alt={`${postData.path}`}
                        fill
                      />
                    </div>

                    <div className="p-1">
                      <h1 className="text-right text-gray-500">
                        {postData.date}
                      </h1>
                      <h1 className="font-bold">{postData.title}</h1>
                      <h1 className="text-xs">{postData.description}</h1>
                      <div className="w-full flex justify-center items-center">
                        <div className="rounded-full bg-green-200 px-2 font-light">
                          {postData.category}
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              )
            )}
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-center">
          <h1 className="font-bold text-lg">
            Category
          </h1>
          <h2
            className="hover:text-lime-600 cursor-pointer"
            onClick={() => {
              onClickCategory("");
            }}
          >
            All Posts
          </h2>
          <h2
            className="hover:text-lime-600 cursor-pointer"
            onClick={() => {
              onClickCategory("my story");
            }}
          >
            my story
          </h2>
          <h2
            className="hover:text-lime-600 cursor-pointer"
            onClick={() => {
              onClickCategory("frontend");
            }}
          >
            frontend
          </h2>
          <h2
            className="hover:text-lime-600 cursor-pointer"
            onClick={() => {
              onClickCategory("backend");
            }}
          >
            backend
          </h2>
          <h2
            className="hover:text-lime-600 cursor-pointer"
            onClick={() => {
              onClickCategory("javascript");
            }}
          >
            javascript
          </h2>
        </div>
      </div>
    </>
  );
}
