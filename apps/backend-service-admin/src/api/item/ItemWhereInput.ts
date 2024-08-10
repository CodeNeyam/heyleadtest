import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ItemWhereInput = {
  currency?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  name?: StringNullableFilter;
  note?: StringNullableFilter;
  price?: FloatNullableFilter;
  serviceType?: StringNullableFilter;
  videoLink?: StringNullableFilter;
  webLink?: StringNullableFilter;
};
