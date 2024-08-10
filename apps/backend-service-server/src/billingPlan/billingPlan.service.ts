import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BillingPlanServiceBase } from "./base/billingPlan.service.base";

@Injectable()
export class BillingPlanService extends BillingPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
