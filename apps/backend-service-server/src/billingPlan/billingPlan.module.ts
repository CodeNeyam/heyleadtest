import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BillingPlanModuleBase } from "./base/billingPlan.module.base";
import { BillingPlanService } from "./billingPlan.service";
import { BillingPlanController } from "./billingPlan.controller";
import { BillingPlanResolver } from "./billingPlan.resolver";

@Module({
  imports: [BillingPlanModuleBase, forwardRef(() => AuthModule)],
  controllers: [BillingPlanController],
  providers: [BillingPlanService, BillingPlanResolver],
  exports: [BillingPlanService],
})
export class BillingPlanModule {}
