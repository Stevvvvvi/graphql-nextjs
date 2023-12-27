import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

if (!process.env.GRAPHQL_SERVER) {
    throw new Error("Cannot find server url")
}

const gqlClient = new GraphQLClient(process.env.GRAPHQL_SERVER)

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    }
})