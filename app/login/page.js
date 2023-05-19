"use client";
import GoogleLogin from "@/app/login/GoogleLogin";
import KakaoLogin from "@/app/login/KakaoLogin";
import LoginButton from "@/app/components/LoginButton";
import LoginInput from "@/app/components/LoginInput";
import LoginRegTitle from "@/app/components/LoginRegTitle";
import NaverLogin from "@/app/login/NaverLogin";
import Layout from "./layout";

export default function Login() {
  return (
    <Layout>
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
    </Layout>
  );
}
