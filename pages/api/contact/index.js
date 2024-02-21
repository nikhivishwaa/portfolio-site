// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Connect from "@/db/connect";

export default async function handler(req, res) {
  console.log(process.env.URL);
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const result = await Connect(postData, {
      ...data,
      seen: false,
      date: new Date().toJSON(),
    });
    if (result)
      res.status(201).json({
        success: true,
        message: "your response recorded successfully!",
      });
    else res.status(404).json({ success: false, message: "unexpected error" });
  } else if (req.method === "GET") {
    const result = await Connect(getData);
    if (result)
      res.status(200).json({
        success: true,
        message: "messages list found",
        data: result,
      });
    else res.status(404).json({ success: false, message: "unexpected error" });
  } else
    res.status(405).json({ success: false, message: "method not allowed" });
}

async function postData(db, data) {
  const collection = db.collection("contact");
  const result = await collection.insertOne(data);
  return result;
}
async function getData(db, data) {
  const collection = db.collection("contact");
  const result = await collection.find({}).toArray();
  return result;
}
