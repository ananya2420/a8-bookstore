import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGO_URI is not defined in environment variables");
}

const options = {};
let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so the value
  // is preserved across module reloads caused by HMR.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

const db = (await clientPromise).db("book-store");

export const auth = betterAuth({
  database: mongodbAdapter(db), // Better-auth handles the adapter via the db object
  emailAndPassword: {
    enabled: true,
  },
});


//book-store: password: 5TBPqUOsMMY0OqPp
//test password: 6xzQOBuqmOMzC5pa