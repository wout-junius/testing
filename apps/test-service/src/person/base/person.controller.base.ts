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
import { PersonService } from "../person.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PersonCreateInput } from "./PersonCreateInput";
import { PersonWhereInput } from "./PersonWhereInput";
import { PersonWhereUniqueInput } from "./PersonWhereUniqueInput";
import { PersonFindManyArgs } from "./PersonFindManyArgs";
import { PersonUpdateInput } from "./PersonUpdateInput";
import { Person } from "./Person";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PersonControllerBase {
  constructor(
    protected readonly service: PersonService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Person })
  @swagger.ApiBody({
    type: PersonCreateInput,
  })
  @nestAccessControl.UseRoles({
    resource: "Person",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: PersonCreateInput): Promise<Person> {
    return await this.service.create({
      data: {
        ...data,

        subject: data.subject
          ? {
              connect: data.subject,
            }
          : undefined,
      },
      select: {
        age: true,
        createdAt: true,
        firstname: true,
        id: true,
        lastname: true,

        subject: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Person] })
  @ApiNestedQuery(PersonFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Person",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Person[]> {
    const args = plainToClass(PersonFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        age: true,
        createdAt: true,
        firstname: true,
        id: true,
        lastname: true,

        subject: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Person })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Person",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<Person | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        age: true,
        createdAt: true,
        firstname: true,
        id: true,
        lastname: true,

        subject: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Person })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: PersonUpdateInput,
  })
  @nestAccessControl.UseRoles({
    resource: "Person",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PersonWhereUniqueInput,
    @common.Body() data: PersonUpdateInput
  ): Promise<Person | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          subject: data.subject
            ? {
                connect: data.subject,
              }
            : undefined,
        },
        select: {
          age: true,
          createdAt: true,
          firstname: true,
          id: true,
          lastname: true,

          subject: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Person })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Person",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PersonWhereUniqueInput
  ): Promise<Person | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          age: true,
          createdAt: true,
          firstname: true,
          id: true,
          lastname: true,

          subject: {
            select: {
              id: true,
            },
          },

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
