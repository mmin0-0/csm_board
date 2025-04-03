type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Todo = {
  _id: string;
  author: string | null | undefined;
  title: string;
  date: Date;
};