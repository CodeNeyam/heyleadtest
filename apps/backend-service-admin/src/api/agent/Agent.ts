import { JsonValue } from "type-fest";

export type Agent = {
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  image: JsonValue;
  password: string | null;
  phone: string | null;
  updatedAt: Date;
};
