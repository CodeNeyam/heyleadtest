/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BillingPlan as PrismaBillingPlan } from "@prisma/client";

export class BillingPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BillingPlanCountArgs, "select">
  ): Promise<number> {
    return this.prisma.billingPlan.count(args);
  }

  async billingPlans(
    args: Prisma.BillingPlanFindManyArgs
  ): Promise<PrismaBillingPlan[]> {
    return this.prisma.billingPlan.findMany(args);
  }
  async billingPlan(
    args: Prisma.BillingPlanFindUniqueArgs
  ): Promise<PrismaBillingPlan | null> {
    return this.prisma.billingPlan.findUnique(args);
  }
  async createBillingPlan(
    args: Prisma.BillingPlanCreateArgs
  ): Promise<PrismaBillingPlan> {
    return this.prisma.billingPlan.create(args);
  }
  async updateBillingPlan(
    args: Prisma.BillingPlanUpdateArgs
  ): Promise<PrismaBillingPlan> {
    return this.prisma.billingPlan.update(args);
  }
  async deleteBillingPlan(
    args: Prisma.BillingPlanDeleteArgs
  ): Promise<PrismaBillingPlan> {
    return this.prisma.billingPlan.delete(args);
  }
}
