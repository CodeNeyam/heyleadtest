import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BillingPlanService } from "./billingPlan.service";
import { BillingPlanControllerBase } from "./base/billingPlan.controller.base";

@swagger.ApiTags("billingPlans")
@common.Controller("billingPlans")
export class BillingPlanController extends BillingPlanControllerBase {
  constructor(
    protected readonly service: BillingPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
