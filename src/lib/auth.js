import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("book-store");

export const auth = betterAuth({
  // Enabling email and password authentication
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // Set to true in production for better security
  },

  // Database adapter
  database: mongodbAdapter(db, {
    client,
  }),
});

//book-store: password: 5TBPqUOsMMY0OqPp
//test password: 6xzQOBuqmOMzC5pa