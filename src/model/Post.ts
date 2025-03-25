import { ObjectId } from "mongodb";

export type Post = {
  _id: ObjectId | string;
  author: string;
  title: string;
  content: string;
  file?: string;
  postType: string;
  createAt: string;
};