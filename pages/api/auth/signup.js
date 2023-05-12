import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import { redirect } from "next/dist/server/api-utils";

export default async function Signup(req, res) {
  if (req.method == "POST") {
    // user_cred라는 컬렉션에 회원정보 저장
    let db = (await connectDB).db("forum");
    await db.collection("user_cred").insertOne(req.body);

    // 비밀번호 암호화
    let hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;

    res.redirect("/login");
  } else {
    res.status(500).json({ result: false, error: "Route not valid" });
  }
}
