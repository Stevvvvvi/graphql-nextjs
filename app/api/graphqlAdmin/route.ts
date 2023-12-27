import "reflect-metadata";
import { resolvers, OwnerCrudResolver } from "@generated/type-graphql";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { buildSchema } from "type-graphql";
import prisma from '@/prisma/db';
import Context from "@/src/graphql/context";


const schema = await buildSchema({
    resolvers,
    emitSchemaFile: true,
})

// const resolvers = {
//     Query: {
//       hello: () => 'world',
//     },
//   };

// const typeDefs = `#graphql
//   type Query {
//     hello: String
//   }
// `;

const server = new ApolloServer<Context>({
    schema,
  });


const handler = startServerAndCreateNextHandler<NextRequest, Context>(server, {context: async (req,res)=>({req,res,prisma})});

export { handler as GET, handler as POST };