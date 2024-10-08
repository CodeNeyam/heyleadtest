/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PartnerService } from "../partner.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PartnerCreateInput } from "./PartnerCreateInput";
import { Partner } from "./Partner";
import { PartnerFindManyArgs } from "./PartnerFindManyArgs";
import { PartnerWhereUniqueInput } from "./PartnerWhereUniqueInput";
import { PartnerUpdateInput } from "./PartnerUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PartnerControllerBase {
  constructor(
    protected readonly service: PartnerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Partner })
  @nestAccessControl.UseRoles({
    resource: "Partner",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPartner(
    @common.Body() data: PartnerCreateInput
  ): Promise<Partner> {
    return await this.service.createPartner({
      data: data,
      select: {
        createdAt: true,
        email: true,
        fullName: true,
        id: true,
        password: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Partner] })
  @ApiNestedQuery(PartnerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Partner",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async partners(@common.Req() request: Request): Promise<Partner[]> {
    const args = plainToClass(PartnerFindManyArgs, request.query);
    return this.service.partners({
      ...args,
      select: {
        createdAt: true,
        email: true,
        fullName: true,
        id: true,
        password: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Partner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Partner",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async partner(
    @common.Param() params: PartnerWhereUniqueInput
  ): Promise<Partner | null> {
    const result = await this.service.partner({
      where: params,
      select: {
        createdAt: true,
        email: true,
        fullName: true,
        id: true,
        password: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Partner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Partner",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePartner(
    @common.Param() params: PartnerWhereUniqueInput,
    @common.Body() data: PartnerUpdateInput
  ): Promise<Partner | null> {
    try {
      return await this.service.updatePartner({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          fullName: true,
          id: true,
          password: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Partner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Partner",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePartner(
    @common.Param() params: PartnerWhereUniqueInput
  ): Promise<Partner | null> {
    try {
      return await this.service.deletePartner({
        where: params,
        select: {
          createdAt: true,
          email: true,
          fullName: true,
          id: true,
          password: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
