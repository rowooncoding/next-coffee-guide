"use client";
import Link from "next/link";
import LogOutButton from "./LogOutButton";

export default function HeaderNav(props) {
  return (
    <ul className="flex gap-[34px] mt-[46px] mr-[30px] font-light text-[#675D50]">
      {props.session ? (
        <span>
          {props.session.user.name} <LogOutButton />
        </span>
      ) : (
        <>
          <Link href="/login">
            <li>로그인</li>
          </Link>
          <Link href="/register">
            <li>회원가입</li>
          </Link>
        </>
      )}
      <Link href="/">
        <li>내 계정</li>
      </Link>
    </ul>
  );
}
