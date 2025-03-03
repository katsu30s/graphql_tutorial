const healthCheckTypeDefs = `#graphql
  type Book {
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
  }
`;

const healthCheckResolvers = {
  Query: {
    books: () => [
      {
        title: "プロを目指す人のためのTypeScript入門",
        author: "鈴木 僚太",
      },
      {
        title: "良いコード/悪いコードで学ぶ設計入門",
        author: "仙塲 大也",
      },
    ],
  },
};

export const typeDefs = [healthCheckTypeDefs];

export const resolvers = {
  Query: {
    ...healthCheckResolvers.Query,
  },
};
