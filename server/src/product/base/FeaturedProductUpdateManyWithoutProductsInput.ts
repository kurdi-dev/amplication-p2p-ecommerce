/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FeaturedProductWhereUniqueInput } from "../../featuredProduct/base/FeaturedProductWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class FeaturedProductUpdateManyWithoutProductsInput {
  @Field(() => [FeaturedProductWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeaturedProductWhereUniqueInput],
  })
  connect?: Array<FeaturedProductWhereUniqueInput>;

  @Field(() => [FeaturedProductWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeaturedProductWhereUniqueInput],
  })
  disconnect?: Array<FeaturedProductWhereUniqueInput>;

  @Field(() => [FeaturedProductWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeaturedProductWhereUniqueInput],
  })
  set?: Array<FeaturedProductWhereUniqueInput>;
}
export { FeaturedProductUpdateManyWithoutProductsInput };
