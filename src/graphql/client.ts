import { GraphQLClient } from "graphql-request";
// import { QueryClient } from "react-query";
// import { getSdk } from "../__generated__/resolvers-types";

if (!process.env.GRAPHQL_SERVER) {
    throw new Error("Cannot find server url")
}

export const graphqlClient = new GraphQLClient(process.env.GRAPHQL_SERVER)

// export const {} = getSdk(gqlClient)

// export const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             refetchOnMount: false,
//             refetchOnWindowFocus: false,
//             refetchOnReconnect: false,
//         }
//     }
// })