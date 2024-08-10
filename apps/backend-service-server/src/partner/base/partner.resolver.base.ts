/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Partner } from "./Partner";
import { PartnerCountArgs } from "./PartnerCountArgs";
import { PartnerFindManyArgs } from "./PartnerFindManyArgs";
import { PartnerFindUniqueArgs } from "./PartnerFindUniqueArgs";
import { CreatePartnerArgs } from "./CreatePartnerArgs";
import { UpdatePartnerArgs } from "./UpdatePartnerArgs";
import { DeletePartnerArgs } from "./DeletePartnerArgs";
import { PartnerService } from "../partner.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Partner)
export class PartnerResolverBase {
  constructor(
    protected readonly service: PartnerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Partner",
    action: "read",
    possession: "any",
  })
  async _partnersMeta(
    @graphql.Args() args: PartnerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Partner])
  @nestAccessControl.UseRoles({
    resource: "Partner",
    action: "read",
    possession: "any",
  })
  async partners(
    @graphql.Args() args: PartnerFindManyArgs
  ): Promise<Partner[]> {
    return this.service.partners(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Partner, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Partner",
    action: "read",
    possession: "own",
  })
  async partner(
    @graphql.Args() args: PartnerFindUniqueArgs
  ): Promise<Partner | null> {
    const result = await this.service.partner(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Partner)
  @nestAccessControl.UseRoles({
    resource: "Partner",
    action: "create",
    possession: "any",
  })
  async createPartner(
    @graphql.Args() args: CreatePartnerArgs
  ): Promise<Partner> {
    return await this.service.createPartner({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Partner)
  @nestAccessControl.UseRoles({
    resource: "Partner",
    action: "update",
    possession: "any",
  })
  async updatePartner(
    @graphql.Args() args: UpdatePartnerArgs
  ): Promise<Partner | null> {
    try {
      return await this.service.updatePartner({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Partner)
  @nestAccessControl.UseRoles({
    resource: "Partner",
    action: "delete",
    possession: "any",
  })
  async deletePartner(
    @graphql.Args() args: DeletePartnerArgs
  ): Promise<Partner | null> {
    try {
      return await this.service.deletePartner(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
