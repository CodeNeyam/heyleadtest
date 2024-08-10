import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  clientAddress?: SortOrder;
  clientCity?: SortOrder;
  clientFullName?: SortOrder;
  clientPhone?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  item?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  serviceType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
