"use client";

import { signIn } from "next-auth/react";

export default function GoogleLogin() {
  return (
    <button
      onClick={() => {
        signIn("google");
      }}
      type="submit"
      name="social"
      className="border w-80 h-12 rounded-full flex justify-center items-center border-[#0C2340] text-[#0C2340]"
    >
      <img src="/google.svg" alt="구글 로그인" className="mr-2 w-5 h-5" />
      구글로 시작하기
    </button>
  );
}
