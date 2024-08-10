import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Items"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
