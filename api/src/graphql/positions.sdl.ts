export const schema = gql`
  type Position {
    id: Int!
    title: String!
    entrants: [Entrant]!
  }

  type Query {
    positions: [Position!]! @skipAuth
    position(id: Int!): Position @requireAuth
  }

  input CreatePositionInput {
    title: String!
  }

  input UpdatePositionInput {
    title: String
  }

  type Mutation {
    createPosition(input: CreatePositionInput!): Position! @requireAuth
    updatePosition(id: Int!, input: UpdatePositionInput!): Position!
      @requireAuth
    deletePosition(id: Int!): Position! @requireAuth
  }
`
