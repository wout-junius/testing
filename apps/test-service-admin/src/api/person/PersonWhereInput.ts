import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type PersonWhereInput = {
  age?: IntNullableFilter;
  firstname?: StringNullableFilter;
  id?: StringFilter;
  lastname?: StringNullableFilter;
  subject?: SubjectWhereUniqueInput;
};
