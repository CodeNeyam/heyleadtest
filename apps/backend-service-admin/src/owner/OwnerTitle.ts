import { Owner as TOwner } from "../api/owner/Owner";

export const OWNER_TITLE_FIELD = "companyName";

export const OwnerTitle = (record: TOwner): string => {
  return record.companyName?.toString() || String(record.id);
};
