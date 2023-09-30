import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SUBJECT_TITLE_FIELD } from "./SubjectTitle";

export const SubjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Person"
          target="subjectId"
          label="people"
        >
          <Datagrid rowClick="show">
            <TextField label="age" source="age" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="firstname" source="firstname" />
            <TextField label="ID" source="id" />
            <TextField label="lastname" source="lastname" />
            <ReferenceField
              label="subject"
              source="subject.id"
              reference="Subject"
            >
              <TextField source={SUBJECT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
