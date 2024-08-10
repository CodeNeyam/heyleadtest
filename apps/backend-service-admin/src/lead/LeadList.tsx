import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LeadList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Leads"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
