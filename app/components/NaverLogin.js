import { signIn } from "next-auth/react";

export default function NaverLogin() {
  return (
    <button
      onClick={() => {
        signIn("naver");
      }}
      type="submit"
      name="social"
      className="border w-80 h-12 rounded-full flex justify-center items-center border-[#0C2340] text-[#0C2340]"
    >
      <img src="/naver.svg" alt="네이버 로그인" className="mr-2 w-5 h-5" />
      네이버로 시작하기
    </button>
  );
}
