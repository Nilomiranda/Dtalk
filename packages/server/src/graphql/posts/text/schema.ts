import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
} from 'graphql';
import User from '../../users/schema';
import { Prisma } from '../../../prisma/generated/prisma-client';

const TextPost = new GraphQLObjectType({
  name: 'TextPost',
  fields: {
    id: {
      type: GraphQLID,
      resolve(parent) {
        return parent.id;
      },
    },
    postedBy: {
      type: User,
      resolve(parent, args, context) {
        return context.prisma.textPost({ id: parent.id }).postedBy();
      },
    },
    content: {
      type: GraphQLNonNull(GraphQLString),
      resolve(parent, args, context: Prisma | any) {
        console.log('TCL: resolve -> content -> parent', parent);
        return parent.content;
      },
    },
  },
});

export default TextPost;