import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "The Dog Model" })
export class Dog {
    @Field(type => ID)
    name!: string;

    @Field({nullable: true})
    image?: string | null

    @Field()
    createdAt: Date | undefined

    @Field()
    updatedAt: Date | undefined

    @Field()
    description: string | undefined

    @Field()
    type: string | undefined


}