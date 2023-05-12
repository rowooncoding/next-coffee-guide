import { signIn } from "next-auth/react";

export default function KakaoLogin() {
  return (
    <button
      onClick={() => {
        signIn("kakao");
      }}
      type="submit"
      name="social"
      className="border w-80 h-12 rounded-full flex justify-center items-center border-[#0C2340] text-[#0C2340]"
    >
      <img src="/kakao.svg" alt="카카오 로그인" className="mr-2 w-5 h-5" />
      카카오로 시작하기
    </button>
  );
}
