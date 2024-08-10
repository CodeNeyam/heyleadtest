import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const OwnerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="cnss" source="cnss" />
        <TextField label="companyName" source="companyName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="fullName" source="fullName" />
        <TextField label="ice" source="ice" />
        <TextField label="ID" source="id" />
        <TextField label="if" source="ifField" />
        <TextField label="password" source="password" />
        <TextField label="phone" source="phone" />
        <TextField label="profilePhoto" source="profilePhoto" />
        <TextField label="rc" source="rc" />
        <TextField label="rib" source="rib" />
        <TextField label="tp" source="tp" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
