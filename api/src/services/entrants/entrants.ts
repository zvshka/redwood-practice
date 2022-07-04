import type {
  QueryResolvers,
  MutationResolvers,
  EntrantResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const entrants: QueryResolvers['entrants'] = () => {
  return db.entrant.findMany()
}

export const entrant: QueryResolvers['entrant'] = ({ id }) => {
  return db.entrant.findUnique({
    where: { id },
  })
}

export const createEntrant: MutationResolvers['createEntrant'] = ({
  input,
}) => {
  return db.entrant.create({
    data: input,
  })
}

export const updateEntrant: MutationResolvers['updateEntrant'] = ({
  id,
  input,
}) => {
  return db.entrant.update({
    data: input,
    where: { id },
  })
}

export const deleteEntrant: MutationResolvers['deleteEntrant'] = ({ id }) => {
  return db.entrant.delete({
    where: { id },
  })
}

export const Entrant: EntrantResolvers = {
  course: (_obj, { root }) =>
    db.entrant.findUnique({ where: { id: root.id } }).course(),
  region: (_obj, { root }) =>
    db.entrant.findUnique({ where: { id: root.id } }).region(),
  position: (_obj, { root }) =>
    db.entrant.findUnique({ where: { id: root.id } }).position(),
  identityCard: (_obj, { root }) =>
    db.entrant.findUnique({ where: { id: root.id } }).identityCard(),
  certificate: (_obj, { root }) =>
    db.entrant.findUnique({ where: { id: root.id } }).certificate(),
}
