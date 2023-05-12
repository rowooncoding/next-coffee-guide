import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#675D50] text-[#ffff] w-[100%] h-[195px]">
      <div className="flex justify-between ml-[57px] mt-[15px]">
        <div>
          <ul className="leading-[20px] font-extralight text-[10px] mt-[18px]">
            <li>made by 이로운 </li>
            <li>전화번호 : 010-2592-7128 </li>
            <li>이메일 : dev.rowoon@gmail.com</li>
          </ul>
          <div className="text-[14px] mt-[10px]">
            <span>이용약관</span>
            <span className="ml-[10px]">개인정보처리방침</span>
          </div>
          <ul className="flex gap-[15px] mt-[11px]">
            <li>
              <img src="/github.png" alt="깃허브 로고" />
            </li>
            <li>
              <img src="/instargram.png" alt="인스타그램 로고" />
            </li>
          </ul>
          <div className="border-t-[1px] border-[#ffff] my-[14px] mb-[0px]">
            <span className="mr-[12px] ">
              Copyright &copy; 2023 Coffee Guide
            </span>
            <span>Copyright &copy; 2023 Unspecialty all rights reserved</span>
          </div>
        </div>
        <ul className="flex gap-[5px] mr-[57px] mt-[15px] text-[14px]">
          <Link className="p-[6px] hover:text-[#ABC4AA]" href="/">
            <li>홈</li>
          </Link>
          <Link className="p-[6px] hover:text-[#ABC4AA]" href="/">
            <li>브루잉 가이드</li>
          </Link>
          <Link className="p-[6px] hover:text-[#ABC4AA]" href="/">
            <li>카페추천</li>
          </Link>
          <Link className="p-[6px] hover:text-[#ABC4AA]" href="/">
            <li>원두추천</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
