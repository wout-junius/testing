import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { YearService } from "./year.service";
import { YearControllerBase } from "./base/year.controller.base";

@swagger.ApiTags("years")
@common.Controller("years")
export class YearController extends YearControllerBase {
  constructor(
    protected readonly service: YearService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
