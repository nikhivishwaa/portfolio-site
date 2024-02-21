import Connect from "@/db/connect";

export default async function handler(req, res) {
  const result = await Connect(getData, req.query.id);
  if (result)
    res.status(200).json({
      success: true,
      message: "your message",
      data: result,
    });
  else res.status(404).json({ success: false, message: "unexpected error" });
  //   if (!result.data[0].seen) {
  //     const result = await Connect(seenData, {
  //       id: req.query.id,
  //       status: { seen: true, viewdate: new Date().toJSON() },
  //     });
  //   }
}

async function seenData(db, { id, status }) {
  const collection = db.collection("contact");
  const result = await collection.updateOne({ id: id }, { $set: status });
  return result;
}

async function getData(db, data) {
  const collection = db.collection("contact");
    const result = await collection.findOne({ "_id": data }).toArray();
//   const result = await collection.find({ 1: "kdshgfhsi" }).toArray();
  return result;
}
