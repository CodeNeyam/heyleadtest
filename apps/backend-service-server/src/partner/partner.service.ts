import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PartnerServiceBase } from "./base/partner.service.base";

@Injectable()
export class PartnerService extends PartnerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
