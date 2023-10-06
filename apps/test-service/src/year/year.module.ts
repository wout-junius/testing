import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { YearModuleBase } from "./base/year.module.base";
import { YearService } from "./year.service";
import { YearController } from "./year.controller";
import { YearResolver } from "./year.resolver";

@Module({
  imports: [YearModuleBase, forwardRef(() => AuthModule)],
  controllers: [YearController],
  providers: [YearService, YearResolver],
  exports: [YearService],
})
export class YearModule {}
