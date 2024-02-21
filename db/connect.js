import { MongoClient } from "mongodb";

// stablish connection with database and close it if task is performed

export default async function Connect(callback, data = null) {
  const client = await MongoClient.connect(process.env.DB_URI);
  try {
    const db = client.db(process.env.DB_NAME);
    const result = await callback(db, data); 
    return result;
  } catch (error) {
    console.log("connection error: ", error);
    return false;
  } finally {
    client.close();
  }
}
