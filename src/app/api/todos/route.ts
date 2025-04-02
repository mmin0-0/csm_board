import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async() => {
  try{
    const db = (await connectDB).db('csm_board');
    const todos = await db.collection('todo').find().toArray();

    const todosPlainObjects = todos.map((todo) => ({
      _id: todo._id.toString(),
      title: todo.title,
      date: todo.date,
    }));

    return todosPlainObjects;
  } catch(error){
    console.error("Error fetching todos:", error);
    throw new Error("Failed to fetch todos");
  }
};