/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { YearWhereUniqueInput } from "./YearWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { YearUpdateInput } from "./YearUpdateInput";

@ArgsType()
class UpdateYearArgs {
  @ApiProperty({
    required: true,
    type: () => YearWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => YearWhereUniqueInput)
  @Field(() => YearWhereUniqueInput, { nullable: false })
  where!: YearWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => YearUpdateInput,
  })
  @ValidateNested()
  @Type(() => YearUpdateInput)
  @Field(() => YearUpdateInput, { nullable: false })
  data!: YearUpdateInput;
}

export { UpdateYearArgs as UpdateYearArgs };
