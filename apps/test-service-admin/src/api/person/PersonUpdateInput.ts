import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type PersonUpdateInput = {
  age?: number | null;
  firstname?: string | null;
  lastname?: string | null;
  subject?: SubjectWhereUniqueInput | null;
};
