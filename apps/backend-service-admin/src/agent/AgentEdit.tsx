import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AgentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="fullName" source="fullName" />
        <div />
        <TextInput label="password" source="password" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
