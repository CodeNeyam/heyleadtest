import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  currency?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  note?: SortOrder;
  price?: SortOrder;
  serviceType?: SortOrder;
  updatedAt?: SortOrder;
  videoLink?: SortOrder;
  webLink?: SortOrder;
};
