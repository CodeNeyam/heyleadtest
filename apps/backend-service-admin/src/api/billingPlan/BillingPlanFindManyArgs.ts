import { BillingPlanWhereInput } from "./BillingPlanWhereInput";
import { BillingPlanOrderByInput } from "./BillingPlanOrderByInput";

export type BillingPlanFindManyArgs = {
  where?: BillingPlanWhereInput;
  orderBy?: Array<BillingPlanOrderByInput>;
  skip?: number;
  take?: number;
};
