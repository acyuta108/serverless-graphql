import { graphql } from 'graphql';
import Schema from './schema'

export default (query) => {

  // patch to allow queries from GraphiQL
  // like the initial introspectionQuery
  if (query && query.hasOwnProperty('query')) {
    query = query.query.replace("\n", ' ', "g");
  }

  return graphql(Schema, query);
}