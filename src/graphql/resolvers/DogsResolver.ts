import { Ctx, FieldResolver, Maybe, Query, Resolver, ResolverInterface, Root } from "type-graphql";
import { Dog } from "@/src/graphql/schema/Dog";
import Context from "../context";
import { Owner } from "../schema/Owner";

@Resolver(Dog)
export class DogsResolver {
    @Query(returns => [Dog])
    async dogs(@Ctx() context: Context): Promise<Dog[]> {
        return (await context.prisma?.dog.findMany())?.map((dog)=>({
            ...dog,
            owner: []
        })) ?? []
    }
}

@Resolver(of => Dog)
export class DogTypeResolver implements ResolverInterface<Dog> {
  // Queries and mutations
  @FieldResolver()
  async owner(@Root() parent: Dog, @Ctx() context: Context): Promise<Owner[]> {
    return await context.prisma?.owner.findMany({
        where: {
            dogName: parent.name
        }
    }) ?? []
  }
}