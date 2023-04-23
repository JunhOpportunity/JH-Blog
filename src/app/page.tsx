import Image from "next/image";
import { Inter } from "next/font/google";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";
import data from "../../data/posts.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src={profileImage}
          className="w-40 h-40 rounded-full"
          alt="image"
        />
        <h1 className="font-bold text-2xl">I'm Junho</h1>
        <h2 className="font-bold text-sm">Front-End Developer</h2>
        <h3 className="font-bold text-xs">
          풀스택 개발자를 준비하는 프론트엔드 개발자
        </h3>
        <Link
          href="contact"
          className="rounded-full bg-orange-400 px-3 font-bold"
        >
          Contact Me
        </Link>
      </div>
      <div className="p-3">
        <h1 className="font-bold">Featured Posts</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
          {data.map((postData) =>
            postData.featured ? (
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
                    <h1>{postData.description}</h1>
                    <h1 className="rounded-full bg-green-200 px-1 font-light">
                      {postData.category}
                    </h1>
                  </div>
                </Link>
              </>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </>
  );
}
