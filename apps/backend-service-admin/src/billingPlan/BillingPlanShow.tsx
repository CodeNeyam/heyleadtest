import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const BillingPlanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="onHold" source="onHold" />
        <TextField label="planFees" source="planFees" />
        <TextField label="planType" source="planType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="users" source="users" />
        <TextField label="withdraw" source="withdraw" />
      </SimpleShowLayout>
    </Show>
  );
};
