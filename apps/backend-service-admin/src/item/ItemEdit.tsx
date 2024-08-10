import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
