import * as React from "react";
import { Edit, SimpleForm, EditProps, DateInput } from "react-admin";

export const YearEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="date" source="date" />
      </SimpleForm>
    </Edit>
  );
};
