import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectDB } from "@/utils/database";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

export const authOptions:NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
        credentials: {
          email: { label: "email", type: "text" },
          password: { label: "password", type: "password" },
      },
      async authorize(credentials, req):Promise<any> {
        if(!credentials || !credentials.email ||!credentials.password){
          console.log('이메일 또는 비밀번호가 제공되지 않음');
          return null;
        }

        const db = (await connectDB).db('csm_board');
        const user = await db.collection('user_cred').findOne({email : credentials.email});

        if (!user) {
          console.log('해당 이메일은 없음');
          return null;
        }

        const pwcheck = await bcrypt.compare(credentials.password, user.password);
        if (!pwcheck) {
          console.log('비밀번호 틀림');
          return null;
        }

        return { ...user, role: user.role || "user" };
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 //30일
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {
          name: user.name,
          email: user.email,
          role: user.role || "user",
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user as { name?: string; email?: string; role?: string };
      return session;
    },
  },
  adapter : MongoDBAdapter(connectDB),
  secret : process.env.NEXTAUTH_SECRET,
};