/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FeaturedProductService } from "../featuredProduct.service";
import { FeaturedProductCreateInput } from "./FeaturedProductCreateInput";
import { FeaturedProductWhereInput } from "./FeaturedProductWhereInput";
import { FeaturedProductWhereUniqueInput } from "./FeaturedProductWhereUniqueInput";
import { FeaturedProductFindManyArgs } from "./FeaturedProductFindManyArgs";
import { FeaturedProductUpdateInput } from "./FeaturedProductUpdateInput";
import { FeaturedProduct } from "./FeaturedProduct";
@swagger.ApiBearerAuth()
export class FeaturedProductControllerBase {
  constructor(
    protected readonly service: FeaturedProductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "FeaturedProduct",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: FeaturedProduct })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FeaturedProductCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FeaturedProduct> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "FeaturedProduct",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"FeaturedProduct"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        product: {
          connect: data.product,
        },
      },
      select: {
        createdAt: true,
        endDate: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "FeaturedProduct",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [FeaturedProduct] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(FeaturedProductFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FeaturedProduct[]> {
    const args = plainToClass(FeaturedProductFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "FeaturedProduct",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        endDate: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        startDate: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "FeaturedProduct",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: FeaturedProduct })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FeaturedProductWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FeaturedProduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "FeaturedProduct",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        endDate: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        startDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "FeaturedProduct",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: FeaturedProduct })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FeaturedProductWhereUniqueInput,
    @common.Body()
    data: FeaturedProductUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FeaturedProduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FeaturedProduct",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"FeaturedProduct"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          product: {
            connect: data.product,
          },
        },
        select: {
          createdAt: true,
          endDate: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          startDate: true,
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

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "FeaturedProduct",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: FeaturedProduct })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FeaturedProductWhereUniqueInput
  ): Promise<FeaturedProduct | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          endDate: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          startDate: true,
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
