import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "clientFullName";

export const LeadTitle = (record: TLead): string => {
  return record.clientFullName?.toString() || String(record.id);
};
