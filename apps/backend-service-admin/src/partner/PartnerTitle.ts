import { Partner as TPartner } from "../api/partner/Partner";

export const PARTNER_TITLE_FIELD = "fullName";

export const PartnerTitle = (record: TPartner): string => {
  return record.fullName?.toString() || String(record.id);
};
