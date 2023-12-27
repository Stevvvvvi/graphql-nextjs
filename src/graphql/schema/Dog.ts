import { Field, ID, ObjectType } from "type-graphql";
import { Owner } from "./Owner";

@ObjectType()
export class Dog {
    @Field(type => ID)
    name!: string;

    @Field(type => String, {nullable: true})
    image?: string | null;

    @Field(type => Date)
    createdAt: Date | undefined

    @Field(type => Date)
    updatedAt: Date | undefined

    @Field(type => String)
    description: string = ""

    @Field(type => String)
    type: string = ""

    @Field(type => [Owner])
    owner: Owner[] = [];


}