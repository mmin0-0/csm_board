import { ObjectId } from "mongodb";

export type PostLike = {
  userName?: string | null | undefined;
  postId?: ObjectId | string;
};