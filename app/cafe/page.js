import SectionTitle from "@/components/SectionTitle";
import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function Cafe() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <div>
      <SectionTitle>카페추천</SectionTitle>
      <ul>
        <li>
          <Link href="/">
            <img src="/카페추천샘플.svg" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
