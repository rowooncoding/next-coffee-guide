import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    let db = (await connectDB).db("forum");
    let result = db.collection("post").insertOne(req.body);
    res.redirect(302, "/cafe");
  }
}
