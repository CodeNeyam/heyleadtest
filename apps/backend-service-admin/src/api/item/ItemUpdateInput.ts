import { InputJsonValue } from "../../types";

export type ItemUpdateInput = {
  currency?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  note?: string | null;
  price?: number | null;
  serviceType?: string | null;
  videoLink?: string | null;
  webLink?: string | null;
};
