import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PartnerModuleBase } from "./base/partner.module.base";
import { PartnerService } from "./partner.service";
import { PartnerController } from "./partner.controller";
import { PartnerResolver } from "./partner.resolver";

@Module({
  imports: [PartnerModuleBase, forwardRef(() => AuthModule)],
  controllers: [PartnerController],
  providers: [PartnerService, PartnerResolver],
  exports: [PartnerService],
})
export class PartnerModule {}
