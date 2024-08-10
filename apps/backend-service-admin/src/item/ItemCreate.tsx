import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="currency" source="currency" />
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="name" source="name" />
        <TextInput label="note" multiline source="note" />
        <NumberInput label="price" source="price" />
        <TextInput label="serviceType" source="serviceType" />
        <TextInput label="videoLink" source="videoLink" />
        <TextInput label="webLink" source="webLink" />
      </SimpleForm>
    </Create>
  );
};
