import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return req.status(500).json("제목을 작성해주세요");
    } else if (req.body.content == "") {
      return req.status(500).json("내용을 작성해주세요");
    }
    try {
      let db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(req.body);
      return res.redirect(302, "/cafe");
    } catch (error) {
      alert("서버오류");
    }
  }
}
