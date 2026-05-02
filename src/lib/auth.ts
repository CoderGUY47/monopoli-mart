import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri && process.env.NODE_ENV === "production") {
  console.warn(
    "MONGODB_URI is not defined. The app might fail to build or run correctly.",
  );
}

const client = new MongoClient(mongoUri || "mongodb://localhost:27017/dummy");
//connect the client, it's ready when auth needs it
client.connect().catch((err) => {
  console.error("[Monopoly-Mart] MongoDB connection failed:", err.message);
});

const db = client.db("monopoly");
export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    process.env.BETTER_AUTH_URL as string,
  ].filter(Boolean),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
