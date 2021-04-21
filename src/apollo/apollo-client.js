import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// ** GraphQL ** //
// Github auth & api link
const authVars = {
    githubToken: process.env.GITHUB_TOKEN,
    githubLogin: 'imkarin'
}

// Add github auth to the request headers
const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: authVars.githubToken ? `Bearer ${authVars.githubToken}` : '',
        }
    }
})

const httpLink = createHttpLink ({
    uri: 'https://api.github.com/graphql'
})

// GraphQL client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default client