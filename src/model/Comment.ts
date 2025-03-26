import { ObjectId } from "mongodb";

export type Comment = {
  _id?: ObjectId;
  parent: ObjectId | string;
  author: string | null | undefined;
  email: string | null | undefined;
  content: string;
  createAt: string;
};