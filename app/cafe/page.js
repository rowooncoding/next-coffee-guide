import SectionTitle from "@/app/components/SectionTitle";
import { connectDB } from "@/util/database";
// import Link from "next/link";

export default async function Cafe() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div>
      <SectionTitle>카페추천</SectionTitle>
      <div className="bg-[#F9FAFF] p-[10px]">
        {result.map((list) => {
          return (
            <div className="bg-[white] rounded-[10px] p-[20px] mb-[5px] shadow-[0_2px_4px_0px_rgb(224,224,224)]">
              <h4 className="text-[20px] text-[#675D50] font-[800] m-[0]">
                {list.title}
              </h4>
              <p className="text-[gray] my-[5px] mx-[0]">1월 1일</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
