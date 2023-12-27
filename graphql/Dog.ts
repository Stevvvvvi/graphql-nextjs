import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "The Dog Model" })
export class Dog {
    @Field(type => ID)
    name!: string;
}