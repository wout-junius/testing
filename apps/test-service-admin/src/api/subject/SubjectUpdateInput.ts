import { PersonUpdateManyWithoutSubjectsInput } from "./PersonUpdateManyWithoutSubjectsInput";

export type SubjectUpdateInput = {
  name?: string | null;
  students?: PersonUpdateManyWithoutSubjectsInput;
};
