"use client";
import LoginButton from "@/components/LoginButton";
import LoginInput from "@/components/LoginInput";
import LoginRegTitle from "@/components/LoginRegTitle";
// import { isEmail } from "@/util/isEmail";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function Register() {
  const initialFormState = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const formStateRef = useRef(initialFormState);
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  // const route = useRouter();

  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   const { name, email, password, passwordConfirm } = formStateRef.current;

  //   if (!name || name.trim().length < 2) {
  //     setErrorMessage("이름은 2글자 이상 입력해야 합니다.");
  //     return;
  //   } else if (!isEmail(email)) {
  //     setErrorMessage(`이메일 형식에 맞지 않는 메일 주소입니다.`);
  //     return;
  //   } else if (!password || password.trim().length < 10) {
  //     setErrorMessage("비밀번호를 10자 이상 입력해주세요.");
  //     return;
  //   } else if (password !== passwordConfirm) {
  //     setErrorMessage("비밀번호가 일치하지 않습니다.");
  //     return;
  //   } else {
  //     setErrorMessage("");
  //   }
  //   await route.replace("/login");
  // };

  const onInputHandler = debounce((e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  }, 300);

  const onClickHandler = (e) => {
    setDisabled(!disabled);
  };

  // if (isLoading) {
  //   return (
  //     <div role='alert' className='flex justify-center items-center h-screen'>
  //       <Loading />
  //     </div>
  //   )
  // }

  // if (error) {
  //   return (
  //     <div className="flex flex-col justify-center items-center h-screen gap-12">
  //       <div role="alert" className="text-xl">
  //         이미 사용중인 이메일 입니다.
  //       </div>
  //       <LoginButton disabled={false} onClick={() => route.replace("/login")}>
  //         로그인 페이지로 이동
  //       </LoginButton>
  //     </div>
  //   );
  // }

  return (
    <>
      <LoginRegTitle>회원가입</LoginRegTitle>
      <form
        method="POST"
        action="/api/auth/signup"
        className="flex flex-col gap-10 justify-center items-center mt-11"
      >
        <LoginInput name="name" placeholder="이름" onChange={onInputHandler}>
          이름
        </LoginInput>
        <LoginInput name="email" placeholder="이메일" onChange={onInputHandler}>
          이메일
        </LoginInput>
        <LoginInput
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={onInputHandler}
        >
          비밀번호
        </LoginInput>
        <LoginInput
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          onChange={onInputHandler}
        >
          비밀번호 확인
        </LoginInput>
        <div className="flex">
          <input
            id="1"
            className="mr-2"
            type="checkbox"
            name="개인정보수집동의"
            onClick={onClickHandler}
          />
          <label id="1">개인정보 수집에 대한 동의</label>
        </div>
        <LoginButton type="submit" disabled={disabled}>
          회원가입
        </LoginButton>
        <p className="text-rose-600 mt-12">{errorMessage}</p>
      </form>
    </>
  );
}
