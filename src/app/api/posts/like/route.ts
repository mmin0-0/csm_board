import { connectDB } from "@/utils/database";
import { NextRequest } from "next/server";

export const POST = async(req: NextRequest) => {
  try {
    const db = (await connectDB).db('csm_board');
  } catch(error){
    
  }
};