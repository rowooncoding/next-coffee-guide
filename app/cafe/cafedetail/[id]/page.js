import ViewMore from "@/app/components/ViewMore";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function CafeDetail(props) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div className="w-[828px] m-auto mt-[50px] relative">
      <h4 className="text-[21px] text-[#081910] mx-[10px]">{result.title}</h4>
      <ViewMore />
      <p className="mx-[10px] mt-[10px] pt-[40px] border-t-[1px] text-[#081910]">
        {result.content}
      </p>
    </div>
  );
}
