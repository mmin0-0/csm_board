import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectDB } from "@/utils/database";

export const authOptions:AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  secret : process.env.NEXTAUTH_SECRET,
  adapter : MongoDBAdapter(connectDB),
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };