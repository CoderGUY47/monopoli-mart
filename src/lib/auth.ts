import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri && process.env.NODE_ENV === "production") {
  console.warn("MONGODB_URI is not defined. The app might fail to build or run correctly.");
}

const client = new MongoClient(mongoUri || "mongodb://localhost:27017/dummy");
const db = client.db("monopoly");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),

  baseURL: process.env.BETTER_AUTH_URL,
  secondaryStorage: {
    get: async (key) => null,
    set: async (key, value, expiresAt) => {},
    delete: async (key) => {},
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
});