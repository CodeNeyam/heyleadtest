import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
