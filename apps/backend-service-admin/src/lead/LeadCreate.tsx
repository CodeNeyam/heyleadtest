import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const LeadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="clientAddress" source="clientAddress" />
        <TextInput label="clientCity" source="clientCity" />
        <TextInput label="clientFullName" source="clientFullName" />
        <TextInput label="clientPhone" source="clientPhone" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="item" source="item" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="serviceType" source="serviceType" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
