import { JsonValue } from "type-fest";

export type Owner = {
  address: string | null;
  cnss: string | null;
  companyName: string | null;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  ice: string | null;
  id: string;
  ifField: string | null;
  password: string | null;
  phone: string | null;
  profilePhoto: JsonValue;
  rc: string | null;
  rib: string | null;
  tp: string | null;
  updatedAt: Date;
};
