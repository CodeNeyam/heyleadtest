import { Agent as TAgent } from "../api/agent/Agent";

export const AGENT_TITLE_FIELD = "fullName";

export const AgentTitle = (record: TAgent): string => {
  return record.fullName?.toString() || String(record.id);
};
