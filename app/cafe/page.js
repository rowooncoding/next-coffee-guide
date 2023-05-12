import { connectDB } from "@/util/database";

export default async function Cafe() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return <div>카페 추천 게시글 페이지</div>;
}
