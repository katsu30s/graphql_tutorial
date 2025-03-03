export const machineTypeDefs = `#graphql
type Machine {
  id: Int!
  name: String!
}

type Query {
  fetchMachine(id: Int!): Machine!
}
`;