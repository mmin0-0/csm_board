import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectDB } from "@/utils/database";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    // CredentialsProvider({
    //   name : "Credentials",
    //   credentials: {}
    // }),
  ],
  secret : process.env.NEXTAUTH_SECRET,
  adapter : MongoDBAdapter(connectDB),
};