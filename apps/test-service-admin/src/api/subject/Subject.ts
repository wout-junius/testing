import { Person } from "../person/Person";

export type Subject = {
  createdAt: Date;
  id: string;
  name: string | null;
  students?: Array<Person>;
  updatedAt: Date;
};
