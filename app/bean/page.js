import Link from "next/link";
import SectionTitle from "../mainsection/SectionTitle";
import ListItem from "../cafe/ListItem";
import { connectDB } from "@/util/database";

export default async function Bean() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post2").find().toArray();
  return (
    <div>
      <SectionTitle>원두추천</SectionTitle>
      <Link href="/write">
        <button
          className="mt-[15px] ml-[10px] m-[10px] flex sm:inline-flex justify-center items-center bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus-visible:ring ring-teal-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2"
          type="button"
        >
          글쓰기
        </button>
      </Link>
      <div className="bg-[#F9FAFF] p-[10px]">
        <ListItem result={result} />
      </div>
    </div>
  );
}
