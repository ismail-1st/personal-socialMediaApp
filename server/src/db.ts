import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.SERVER_URL
const uri = dbUrl;

console.log("DB URL: ", uri);

export const client = new MongoClient(uri!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("socialmedia-app").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
