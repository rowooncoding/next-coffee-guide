import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  console.log(req);
  if (req.method == "POST") {
    let db = (await connectDB).db("forum");
    let result = db.collection("post").insertOne(req.body);
    return res.redirect(302, "/cafe");
  } else {
    return res.status(500).json("전송안됐음");
  }
}
