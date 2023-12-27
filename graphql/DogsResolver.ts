import { Query, Resolver } from "type-graphql";
import { Dog } from "@/graphql/Dog";

@Resolver(Dog)
export class DogsResolver {
    @Query(() => [Dog])
    dogs(): Dog[] {
        return [
            {name: "Bo"},
            {name: "sfsdf"}
        ]
    }
}