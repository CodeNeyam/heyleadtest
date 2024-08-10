import { SortOrder } from "../../util/SortOrder";

export type BillingPlanOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  onHold?: SortOrder;
  planFees?: SortOrder;
  planType?: SortOrder;
  updatedAt?: SortOrder;
  users?: SortOrder;
  withdraw?: SortOrder;
};
