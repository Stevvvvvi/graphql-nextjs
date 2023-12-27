import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class GetDogArgs {
  @Field(type => String)
  name!: string;
}