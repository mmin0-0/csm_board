import { connectDB } from "@/utils/database";
import { NextRequest } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (req: NextRequest) => {
  try{
    const db = (await connectDB).db('csm_board');
    const body = await req.json();
    const hash = await bcrypt.hash(body.password, 10);
    console.log(hash);
    console.log(body);
    // await db.collection('user_cred').insertOne(body);


  } catch(error){

  }
};