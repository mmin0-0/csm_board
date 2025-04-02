type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Todo = {
  _id: string;
  title: string;
  date: Date;
};