import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PersonListRelationFilter } from "../person/PersonListRelationFilter";

export type SubjectWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  students?: PersonListRelationFilter;
};
