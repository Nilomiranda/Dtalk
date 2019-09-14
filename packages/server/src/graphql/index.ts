import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql'

// schemas
import User from './users/schema';
import Mutation from './mutations';

export const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      info: {
        type: GraphQLString,
        resolve() {
          return 'Dtalk API --version 1.0'
        }
      },
      users: {
        type: new GraphQLList(User),
        resolve(root, args, context, info) {
          return context.prisma.users()
        }
      },
    }
  }),
  mutation: Mutation
})