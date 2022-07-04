export const schema = gql`
  type Course {
    id: Int!
    title: String!
    category: String!
    hours: Int!
    finalWork: String!
    beginsAt: DateTime!
    endsAt: DateTime!
    periods: String!
    curator: Curator!
    createdAt: DateTime!
    curatorId: Int!
    entrants: [Entrant]!
  }

  type Query {
    courses: [Course!]! @skipAuth
    course(id: Int!): Course @requireAuth
  }

  input CreateCourseInput {
    title: String!
    category: String!
    hours: Int!
    finalWork: String!
    beginsAt: DateTime!
    endsAt: DateTime!
    periods: String!
    curatorId: Int!
  }

  input UpdateCourseInput {
    title: String
    category: String
    hours: Int
    finalWork: String
    beginsAt: DateTime
    endsAt: DateTime
    periods: String
    curatorId: Int
  }

  type Mutation {
    createCourse(input: CreateCourseInput!): Course! @requireAuth
    updateCourse(id: Int!, input: UpdateCourseInput!): Course! @requireAuth
    deleteCourse(id: Int!): Course! @requireAuth
  }
`
