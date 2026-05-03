import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("book-store");

export const auth = betterAuth({
  
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, 
  },

  // Database adapter
  database: mongodbAdapter(db, {
    client,
  }),
   socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
});

//book-store: password: 5TBPqUOsMMY0OqPp
//test password: 6xzQOBuqmOMzC5pa