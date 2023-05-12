"use client";
import GoogleLogin from "@/components/GoogleLogin";
import KakaoLogin from "@/components/KakaoLogin";
import LoginButton from "@/components/LoginButton";
import LoginInput from "@/components/LoginInput";
import LoginRegTitle from "@/components/LoginRegTitle";
import NaverLogin from "@/components/NaverLogin";

export default function Login() {
  return (
    <>
      <LoginRegTitle>로그인</LoginRegTitle>
      <form className="flex flex-col gap-10 justify-center items-center mt-11">
        <LoginInput name="email" type="email" placeholder="이메일">
          이메일
        </LoginInput>
        <LoginInput name="password" type="password" placeholder="비밀번호">
          비밀번호
        </LoginInput>
        <LoginButton type="submit" name="로그인">
          로그인
        </LoginButton>
      </form>
      <div className="flex flex-col justify-center items-center gap-6 my-[50px]">
        <GoogleLogin />
        <KakaoLogin />
        <NaverLogin />
      </div>
    </>
  );
}
