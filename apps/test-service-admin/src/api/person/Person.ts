import { Subject } from "../subject/Subject";

export type Person = {
  age: number | null;
  createdAt: Date;
  firstname: string | null;
  id: string;
  lastname: string | null;
  subject?: Subject | null;
  updatedAt: Date;
};
