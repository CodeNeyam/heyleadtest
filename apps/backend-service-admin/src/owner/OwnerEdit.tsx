import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OwnerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="cnss" source="cnss" />
        <TextInput label="companyName" source="companyName" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="fullName" source="fullName" />
        <TextInput label="ice" source="ice" />
        <TextInput label="if" source="ifField" />
        <TextInput label="password" source="password" />
        <TextInput label="phone" source="phone" />
        <div />
        <TextInput label="rc" source="rc" />
        <TextInput label="rib" source="rib" />
        <TextInput label="tp" source="tp" />
      </SimpleForm>
    </Edit>
  );
};
