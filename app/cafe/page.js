import SectionTitle from "@/app/mainsection/SectionTitle";
import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function Cafe() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div>
      <SectionTitle>카페추천</SectionTitle>
      <Link href="/write">
        <button
          className="mt-[15px] ml-[10px] m-[10px] flex sm:inline-flex justify-center items-center bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus-visible:ring ring-teal-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2"
          type="button"
        >
          글쓰기
        </button>
      </Link>
      <div className="bg-[#F9FAFF] p-[10px]">
        {result.map((list) => {
          return (
            <div
              className="bg-[white] rounded-[10px] p-[20px] mb-[5px] shadow-[0_2px_4px_0px_rgb(224,224,224)] relative"
              key={list._id}
            >
              <Link href={"/cafe/cafedetail/" + list._id.toString()}>
                <h4 className="text-[20px] text-[#675D50] font-[800] m-[0]">
                  {list.title}
                </h4>
              </Link>
              <p className="text-[gray] my-[5px] mx-[0]">1월 1일</p>
              <Link href={"/cafe/cafeedit/" + list._id.toString()}>
                <button className="absolute top-2 right-12" type="button">
                  수정
                </button>
              </Link>
              <Link href={"/cafe/cafeedit/" + list._id.toString()}>
                <button className="absolute top-2 right-3" type="button">
                  삭제
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
