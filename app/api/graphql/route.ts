import "reflect-metadata";
import { resolvers } from "@generated/type-graphql";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { buildSchema } from "type-graphql";
import { DogsResolver } from "@/src/graphql/resolvers/DogsResolver";


const schema = await buildSchema({
    resolvers: [DogsResolver],
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

const server = new ApolloServer({
    schema
  });


const handler = startServerAndCreateNextHandler<NextRequest>(server);

export { handler as GET, handler as POST };