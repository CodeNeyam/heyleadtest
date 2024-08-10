import { BillingPlan as TBillingPlan } from "../api/billingPlan/BillingPlan";

export const BILLINGPLAN_TITLE_FIELD = "id";

export const BillingPlanTitle = (record: TBillingPlan): string => {
  return record.id?.toString() || String(record.id);
};
