import Image from "next/image";
import Link from "next/link";
import profileImage from "../../../public/images/profile.png";

export default function Contact() {
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
          세상을 이롭게 할 아이디어들을 구현하는 개발자
        </h3>
        <Link
          href="contact"
          className="rounded-full bg-orange-400 px-3 font-bold"
        >
          Contact Me
        </Link>
      </div>
      <div className="flex flex-col justify-center text-center gap-10 mt-6 bg-stone-200 p-10">
        <div>
          <h1 className="font-bold text-xl">Who am i</h1>
          <h2 className="font-bold text-sm">
            아이디어를 실제로 구현하는 풀스텍 개발자
          </h2>
          <h2 className="font-bold text-sm"></h2>
        </div>
        <div>
          <h1 className="font-bold text-xl">Career</h1>
          <h2 className="font-bold text-sm">OO (~Now)</h2>
          <h2 className="font-bold text-sm">OO대학교 소프트웨어학과 (~2026)</h2>
        </div>
        <div>
          <h1 className="font-bold text-xl">Skills</h1>
          <h2 className="font-bold text-sm">React, Next</h2>
          <h2 className="font-bold text-sm">Node, Firebase, MongoDB </h2>
        </div>
      </div>
    </>
  );
}
