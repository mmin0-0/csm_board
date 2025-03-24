import { ObjectId } from "mongodb";

export type Post = {
  _id: ObjectId;
  author: string;
  title: string;
  content: string;
  file?: string;
  postType: string;
  createAt: Date;
};