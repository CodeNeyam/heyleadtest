import { JsonValue } from "type-fest";

export type Item = {
  createdAt: Date;
  currency: string | null;
  description: string | null;
  id: string;
  image: JsonValue;
  name: string | null;
  note: string | null;
  price: number | null;
  serviceType: string | null;
  updatedAt: Date;
  videoLink: string | null;
  webLink: string | null;
};
