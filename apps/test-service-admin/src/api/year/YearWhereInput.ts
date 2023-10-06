import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type YearWhereInput = {
  date?: DateTimeFilter;
  id?: StringFilter;
};
