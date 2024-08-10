import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <TextField label="name" source="name" />
        <TextField label="note" source="note" />
        <TextField label="price" source="price" />
        <TextField label="serviceType" source="serviceType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="videoLink" source="videoLink" />
        <TextField label="webLink" source="webLink" />
      </SimpleShowLayout>
    </Show>
  );
};
