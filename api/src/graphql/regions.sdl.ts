export const schema = gql`
  type Region {
    id: Int!
    name: String!
    entrants: [Entrant]!
  }

  type Query {
    regions: [Region!]! @skipAuth
    region(id: Int!): Region @requireAuth
  }

  input CreateRegionInput {
    name: String!
  }

  input UpdateRegionInput {
    name: String
  }

  type Mutation {
    createRegion(input: CreateRegionInput!): Region! @requireAuth
    updateRegion(id: Int!, input: UpdateRegionInput!): Region! @requireAuth
    deleteRegion(id: Int!): Region! @requireAuth
  }
`
