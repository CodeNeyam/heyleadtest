import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LeadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="clientAddress" source="clientAddress" />
        <TextField label="clientCity" source="clientCity" />
        <TextField label="clientFullName" source="clientFullName" />
        <TextField label="clientPhone" source="clientPhone" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="item" source="item" />
        <TextField label="price" source="price" />
        <TextField label="quantity" source="quantity" />
        <TextField label="serviceType" source="serviceType" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
