import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type OwnerWhereInput = {
  address?: StringNullableFilter;
  cnss?: StringNullableFilter;
  companyName?: StringNullableFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  ice?: StringNullableFilter;
  id?: StringFilter;
  ifField?: StringNullableFilter;
  password?: StringNullableFilter;
  phone?: StringNullableFilter;
  profilePhoto?: JsonFilter;
  rc?: StringNullableFilter;
  rib?: StringNullableFilter;
  tp?: StringNullableFilter;
};
