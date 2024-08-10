import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OwnerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Owners"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
