import { connectDB } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(){
  try{
    const db = (await connectDB).db('csm_board');
    let result = await db.collection('post').find().toArray();

    return NextResponse.json({result})
  } catch(error){
    console.error("Database access error:", error);
    return NextResponse.json({ error: error });
  }
}