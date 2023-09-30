import { PersonCreateNestedManyWithoutSubjectsInput } from "./PersonCreateNestedManyWithoutSubjectsInput";

export type SubjectCreateInput = {
  name?: string | null;
  students?: PersonCreateNestedManyWithoutSubjectsInput;
};
