"use client";

// import { sendMail } from "./sendMail";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import React, { useState } from "react";

export default function Contact() {
  const [useEmail, setUserEmail] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name == "email") {
      setUserEmail(value);
    } else if (name == "subject") {
      setEmailSubject(value);
    } else if (name == "message") {
      setEmailMessage(value);
    }
  };
  const onSubmit = async (event: Event) => {
    event.preventDefault();
    //sendMail({ useEmail, emailSubject, emailMessage });
    fetch("https://node-js-ovbvm.run.goorm.app/api/data", {
      method: "POST",
      body: JSON.stringify({ useEmail, emailSubject, emailMessage }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((data) => console.log(data));
  };

  return (
    <>
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Contact me</h1>
          <h2 className="text-2xl mb-4">https://velog.io/@junhopportunity</h2>
          <div className="flex justify-evenly">
            <div className="w-96 flex justify-evenly items-center">
              <div>
                <FaGithub className="cursor-pointer text-5xl hover:scale-105 hover:text-gray-400" />
              </div>
              <div>
                <FaInstagram className="cursor-pointer text-5xl hover:scale-105 hover:text-gray-400" />
              </div>
              <div>
                <RiKakaoTalkFill className="cursor-pointer text-5xl hover:scale-105 hover:text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2.5">
          <h1 className="text-4xl font-black">Or Send me an Email</h1>
          <div className="rounded-md bg-gray-300 w-96 p-10">
            <form className="flex flex-col">
              <div>당신의 이메일 </div>
              <input
                name="email"
                type="email"
                placeholder=""
                onChange={onChange}
                value={useEmail}
              />
              <div>제목</div>
              <input
                name="subject"
                type="text"
                placeholder=""
                onChange={onChange}
                value={emailSubject}
              />
              <div>메시지</div>
              <textarea
                name="message"
                placeholder=""
                onChange={onChange}
                value={emailMessage}
              />
              <input
                type="submit"
                placeholder="전송"
                onClick={onSubmit}
                className="bg-yellow-500"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
