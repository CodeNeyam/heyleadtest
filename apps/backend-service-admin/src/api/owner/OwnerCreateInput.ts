import { InputJsonValue } from "../../types";

export type OwnerCreateInput = {
  address?: string | null;
  cnss?: string | null;
  companyName?: string | null;
  email?: string | null;
  fullName?: string | null;
  ice?: string | null;
  ifField?: string | null;
  password?: string | null;
  phone?: string | null;
  profilePhoto?: InputJsonValue;
  rc?: string | null;
  rib?: string | null;
  tp?: string | null;
};
