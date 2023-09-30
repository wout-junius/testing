import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  firstname?: SortOrder;
  id?: SortOrder;
  lastname?: SortOrder;
  subjectId?: SortOrder;
  updatedAt?: SortOrder;
};
