import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SubjectTitle } from "../subject/SubjectTitle";

export const PersonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="age" source="age" />
        <TextInput label="firstname" source="firstname" />
        <TextInput label="lastname" source="lastname" />
        <ReferenceInput source="subject.id" reference="Subject" label="subject">
          <SelectInput optionText={SubjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
