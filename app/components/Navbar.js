import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="flex justify-evenly border-t-[1px] border-b-[1px] border-[#F3DEBA] text-[#675D50] mt-[29px] py-[23px] text-[18px]">
      <Link className="p-[6px] hover:text-[#ABC4AA]" href="/">
        <li>홈</li>
      </Link>
      <Link className="p-[6px] hover:text-[#ABC4AA]" href="/">
        <li>브루잉 가이드</li>
      </Link>
      <Link className="p-[6px] hover:text-[#ABC4AA]" href="/cafe">
        <li>카페추천</li>
      </Link>
      <Link className="p-[6px] hover:text-[#ABC4AA]" href="/bean">
        <li>원두추천</li>
      </Link>
    </ul>
  );
}
