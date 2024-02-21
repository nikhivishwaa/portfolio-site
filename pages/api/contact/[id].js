import Connect from "@/db/connect";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const result = await Connect(getData, req.query.id);
  if (result)
    res.status(200).json({
      success: true,
      message: "your message",
      data: result[0],
    });
  else res.status(404).json({ success: false, message: "unexpected error" });
  if (!result[0].seen) {
    const result = await Connect(seenData, {
      id: req.query.id,
      status: { seen: true, viewdate: new Date().toJSON() },
    });
  }
}

async function seenData(db, { id, status }) {
  const collection = db.collection("contact");
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: status }
  );
  return result;
}

async function getData(db, data) {
  const collection = db.collection("contact");
  const result = await collection.find({ _id: new ObjectId(data) }).toArray();
  return result;
}
