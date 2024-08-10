import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BillingPlanResolverBase } from "./base/billingPlan.resolver.base";
import { BillingPlan } from "./base/BillingPlan";
import { BillingPlanService } from "./billingPlan.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BillingPlan)
export class BillingPlanResolver extends BillingPlanResolverBase {
  constructor(
    protected readonly service: BillingPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
