import { ObjectId } from "mongodb";

export type Post = {
  _id: ObjectId | string;
  idx?: number | string;
  author: string;
  title: string;
  content: string;
  file?: string;
  postType: string;
  createAt: string;
  likeUser?: string[];
  likeCount?: number;
};