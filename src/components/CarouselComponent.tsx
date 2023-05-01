"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PostCardComponent from "./PostCardComponent";
import data from "../../data/posts.json";
import Link from "next/link";
import Image from "next/image";

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export function CarouselComponent() {
  return (
    <>
      <Carousel
        className="p-8"
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        centerMode={true}
        transitionDuration={1500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((postData) => (
          <Link
            key={postData.path}
            href={`/posts/${postData.path}`}
            className="w-4/5 ease-in duration-300 hover:scale-105 flex flex-col text-center rounded-lg shadow-md shadow-black-100"
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
              <h1 className="text-right text-gray-500">{postData.date}</h1>
              <h1 className="font-bold">{postData.title}</h1>
              <h1 className="text-xs">{postData.description}</h1>
              <div className="w-full flex justify-center items-center">
                <div className="rounded-full bg-green-200 px-2 font-light">
                  {postData.category}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </>
  );
}
