import {ApolloClient, InMemoryCache, gql} from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:5211/graphql',
    cache: new InMemoryCache()
})

export default client;