"use client";

export default function LoginButton({
  children,
  disabled = false,
  type = "submit",
  name = "",
  ...restProps
}) {
  let style = "border w-80 h-12 rounded-full flex justify-center items-center ";
  switch (name) {
    case "social":
      style += "border-[#0C2340] text-[#0C2340]";
      break;

    case "로그인":
      style += "bg-[#675D50] text-white";
      break;

    default:
      style += "bg-[#675D50] text-white";
      break;
  }
  if (disabled)
    style =
      "border w-80 h-12 rounded-full border-none bg-[#EAEAEA] text-[#8A8A8A]";
  return (
    <button disabled={disabled} type={type} className={style} {...restProps}>
      {children}
    </button>
  );
}
