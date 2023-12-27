import { Query, Resolver } from "type-graphql";
import { Dog } from "@/src/graphql/schema/Dog";

@Resolver(Dog)
export class DogsResolver {
    @Query(returns => [Dog])
    dogs(): Dog[] {
        
        return [
            {name: "Bo"},
            {name: "sfsdf"}
        ]
    }
}