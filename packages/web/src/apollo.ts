import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';


export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://127.0.0.1:4000',
    credentials: 'include'
  }),
  cache: new InMemoryCache()
});