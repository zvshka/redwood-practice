export const schema = gql`
  type Certificate {
    id: Int!
    householdCalculation: String!
    entrant: Entrant!
    entrantId: Int!
    number: String!
  }

  type Query {
    certificates: [Certificate!]! @requireAuth
    certificate(id: Int!): Certificate @requireAuth
  }

  input CreateCertificateInput {
    householdCalculation: String!
    entrantId: Int!
    number: String!
  }

  input UpdateCertificateInput {
    householdCalculation: String
    entrantId: Int
    number: String
  }

  type Mutation {
    createCertificate(input: CreateCertificateInput!): Certificate! @requireAuth
    updateCertificate(id: Int!, input: UpdateCertificateInput!): Certificate!
      @requireAuth
    deleteCertificate(id: Int!): Certificate! @requireAuth
  }
`
