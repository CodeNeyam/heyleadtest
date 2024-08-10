import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BillingPlanList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BillingPlans"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="onHold" source="onHold" />
        <TextField label="planFees" source="planFees" />
        <TextField label="planType" source="planType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="users" source="users" />
        <TextField label="withdraw" source="withdraw" />
      </Datagrid>
    </List>
  );
};
