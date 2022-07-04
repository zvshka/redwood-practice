export const schema = gql`
  type Entrant {
    id: Int!
    firstName: String!
    lastName: String!
    middleName: String!
    course: Course!
    region: Region!
    organization: String!
    position: Position!
    education: Education!
    diplomaLastname: String!
    diplomaSerial: String!
    diplomaNumber: String!
    snils: String!
    birthday: DateTime!
    citizenship: String!
    createdAt: DateTime!
    identityCard: IdentityCard
    certificate: Certificate
    courseId: Int!
    regionId: Int!
    positionId: Int!
  }

  enum Education {
    MIDDLE
    HIGH
  }

  type Query {
    entrants: [Entrant!]! @requireAuth
    entrant(id: Int!): Entrant @requireAuth
  }

  input CreateEntrantInput {
    firstName: String!
    lastName: String!
    middleName: String!
    organization: String!
    education: Education!
    diplomaLastname: String!
    diplomaSerial: String!
    diplomaNumber: String!
    snils: String!
    birthday: DateTime!
    citizenship: String!
    courseId: Int!
    regionId: Int!
    positionId: Int!
  }

  input UpdateEntrantInput {
    firstName: String
    lastName: String
    middleName: String
    organization: String
    education: Education
    diplomaLastname: String
    diplomaSerial: String
    diplomaNumber: String
    snils: String
    birthday: DateTime
    citizenship: String
    courseId: Int
    regionId: Int
    positionId: Int
  }

  type Mutation {
    createEntrant(input: CreateEntrantInput!): Entrant! @requireAuth
    updateEntrant(id: Int!, input: UpdateEntrantInput!): Entrant! @requireAuth
    deleteEntrant(id: Int!): Entrant! @requireAuth
  }
`
