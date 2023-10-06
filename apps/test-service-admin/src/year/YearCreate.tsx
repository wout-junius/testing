import * as React from "react";
import { Create, SimpleForm, CreateProps, DateInput } from "react-admin";

export const YearCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="date" source="date" />
      </SimpleForm>
    </Create>
  );
};
