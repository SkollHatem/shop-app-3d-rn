import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Router
import Router from "./src/Router";

// Initialize Apollo Client
const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: "https://shop-app-3d-rn-backend.onrender.com/graphql",
    // uri: "localhost:3000/graphql",
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Router />
        </ApolloProvider>
    );
}
