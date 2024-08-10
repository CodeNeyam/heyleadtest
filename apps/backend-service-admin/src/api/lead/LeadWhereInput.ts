import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LeadWhereInput = {
  clientAddress?: StringNullableFilter;
  clientCity?: StringNullableFilter;
  clientFullName?: StringNullableFilter;
  clientPhone?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  item?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  serviceType?: StringNullableFilter;
  status?: StringNullableFilter;
};
