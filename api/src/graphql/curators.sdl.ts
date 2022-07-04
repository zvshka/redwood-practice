export const schema = gql`
  type Curator {
    id: Int!
    fio: String!
    courses: [Course]!
  }

  type Query {
    curators: [Curator!]! @skipAuth
    curator(id: Int!): Curator @requireAuth
  }

  input CreateCuratorInput {
    fio: String!
  }

  input UpdateCuratorInput {
    fio: String
  }

  type Mutation {
    createCurator(input: CreateCuratorInput!): Curator! @requireAuth
    updateCurator(id: Int!, input: UpdateCuratorInput!): Curator! @requireAuth
    deleteCurator(id: Int!): Curator! @requireAuth
  }
`
