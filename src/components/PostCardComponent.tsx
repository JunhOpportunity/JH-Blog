import Image from "next/image";
import Link from "next/link";
import data from "../../data/posts.json";

export default function PostCardComponent() {
  return (
    <>
      {data.map((postData) => (
        <Link
          key={postData.path}
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
            <h1 className="text-right text-gray-500">{postData.date}</h1>
            <h1 className="font-bold">{postData.title}</h1>
            <h1>{postData.description}</h1>
            <h1 className="rounded-full bg-green-200 px-1 font-light">
              {postData.category}
            </h1>
          </div>
        </Link>
      ))}
    </>
  );
}
