import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: `${
		process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1338'
	}/graphql`,
	cache: new InMemoryCache(),
})

export default client
