export const schema = gql`
  type IdentityCard {
    id: Int!
    entrant: Entrant!
    householdCalculation: String!
    number: String!
    serial: String!
    giveDate: DateTime!
    createdAt: DateTime!
    entrantId: Int!
  }

  type Query {
    identityCards: [IdentityCard!]! @requireAuth
    identityCard(id: Int!): IdentityCard @requireAuth
  }

  input CreateIdentityCardInput {
    householdCalculation: String!
    number: String!
    serial: String!
    giveDate: DateTime!
    entrantId: Int!
  }

  input UpdateIdentityCardInput {
    householdCalculation: String
    number: String
    serial: String
    giveDate: DateTime
    entrantId: Int
  }

  type Mutation {
    createIdentityCard(input: CreateIdentityCardInput!): IdentityCard!
      @requireAuth
    updateIdentityCard(
      id: Int!
      input: UpdateIdentityCardInput!
    ): IdentityCard! @requireAuth
    deleteIdentityCard(id: Int!): IdentityCard! @requireAuth
  }
`
