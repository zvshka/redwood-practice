export const schema = gql`
  type Event {
    id: Int!
    title: String!
    date: DateTime!
    responsible: String!
    place: String!
  }

  type Query {
    events: [Event!]! @skipAuth
    event(id: Int!): Event @requireAuth
  }

  input CreateEventInput {
    title: String!
    date: DateTime!
    responsible: String!
    place: String!
  }

  input UpdateEventInput {
    title: String
    date: DateTime
    responsible: String
    place: String
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: Int!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: Int!): Event! @requireAuth
  }
`
