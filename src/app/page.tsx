import Image from "next/image";
import { Inter } from "next/font/google";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image src={profileImage} className="w-40 h-40 rounded-full" alt="image" />
        <h1 className="font-bold text-2xl">I'm Junho</h1>
        <h2 className="font-bold text-sm">Front-End Developer</h2>
        <h3 className="font-bold text-xs">풀스택 개발자를 준비하는 프론트엔드 개발자</h3>
        <Link href="contact" className="rounded-full bg-orange-400 px-3 font-bold">Contact Me</Link>
      </div>
    </>
  );
}
