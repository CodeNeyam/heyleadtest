export type BillingPlan = {
  createdAt: Date;
  id: string;
  onHold: number | null;
  planFees: number | null;
  planType?: "Option1" | null;
  updatedAt: Date;
  users: number | null;
  withdraw: number | null;
};
