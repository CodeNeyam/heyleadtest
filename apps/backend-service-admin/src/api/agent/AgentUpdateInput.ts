import { InputJsonValue } from "../../types";

export type AgentUpdateInput = {
  email?: string | null;
  fullName?: string | null;
  image?: InputJsonValue;
  password?: string | null;
  phone?: string | null;
};
