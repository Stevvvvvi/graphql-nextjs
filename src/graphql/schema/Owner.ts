import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "The Owner of Dogs" })
export class Owner {
    @Field(type => ID)
    id!: string;

    @Field(type => String)
    name: string | undefined

}