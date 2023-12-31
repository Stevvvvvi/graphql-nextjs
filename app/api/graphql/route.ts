import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { buildSchema } from "type-graphql";
import { DogsResolver, DogTypeResolver } from "@/src/graphql/resolvers/DogsResolver";
import prisma from '@/prisma/db';
import Context from "@/src/graphql/context";


const schema = await buildSchema({
    resolvers: [DogsResolver, DogTypeResolver],
    emitSchemaFile: true,
})

const server = new ApolloServer<Context>({
    schema,
  });


const handler = startServerAndCreateNextHandler<NextRequest, Context>(server, {context: async (req,res)=>({req,res,prisma})});

export { handler as GET, handler as POST };