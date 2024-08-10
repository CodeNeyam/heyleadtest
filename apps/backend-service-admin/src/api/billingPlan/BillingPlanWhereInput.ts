import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BillingPlanWhereInput = {
  id?: StringFilter;
  onHold?: FloatNullableFilter;
  planFees?: FloatNullableFilter;
  planType?: "Option1";
  users?: IntNullableFilter;
  withdraw?: FloatNullableFilter;
};
