export const schema = gql`
  type Seminar {
    id: Int!
    title: String!
    date: DateTime!
    responsible: String!
  }

  type Query {
    seminars: [Seminar!]! @skipAuth
    seminar(id: Int!): Seminar @requireAuth
  }

  input CreateSeminarInput {
    title: String!
    date: DateTime!
    responsible: String!
  }

  input UpdateSeminarInput {
    title: String
    date: DateTime
    responsible: String
  }

  type Mutation {
    createSeminar(input: CreateSeminarInput!): Seminar! @requireAuth
    updateSeminar(id: Int!, input: UpdateSeminarInput!): Seminar! @requireAuth
    deleteSeminar(id: Int!): Seminar! @requireAuth
  }
`
