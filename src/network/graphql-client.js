import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemomyCache} from 'apollo-cache-inmemory';
import constants from '../constants';

export default new ApolloClient ({
    link: new HttpLink({uri: constants.graphQLURL}),
    cache: new InMemomyCache,
});