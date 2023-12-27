import { Args, Ctx, FieldResolver, Maybe, Query, Resolver, ResolverInterface, Root } from "type-graphql";
import { Dog } from "@/src/graphql/schema/Dog";
import Context from "../context";
import { Owner } from "../schema/Owner";
import { GetDogArgs } from "../arguments/dogArguments";
import { GraphQLError } from "graphql";

@Resolver(Dog)
export class DogsResolver {
    @Query(returns => [Dog])
    async dogs(@Ctx() context: Context): Promise<Dog[]> {
        return (await context.prisma?.dog.findMany())?.map((dog)=>({
            ...dog,
            owner: []
        })) ?? []
    }

    @Query(returns => Dog)
    async dog(@Args() { name }: GetDogArgs, @Ctx() context: Context): Promise<Dog> {
        const findDog = await context.prisma?.dog.findUniqueOrThrow({
            where: {
                name,
            }
        })
        if (!findDog) {
            throw new GraphQLError(`cannot find dog with name ${name}`)
        }
        return {
            ...findDog,
            owner: []
        }
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