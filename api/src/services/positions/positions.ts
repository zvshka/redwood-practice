import type {
  QueryResolvers,
  MutationResolvers,
  PositionResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const positions: QueryResolvers['positions'] = () => {
  return db.position.findMany()
}

export const position: QueryResolvers['position'] = ({ id }) => {
  return db.position.findUnique({
    where: { id },
  })
}

export const createPosition: MutationResolvers['createPosition'] = ({
  input,
}) => {
  return db.position.create({
    data: input,
  })
}

export const updatePosition: MutationResolvers['updatePosition'] = ({
  id,
  input,
}) => {
  return db.position.update({
    data: input,
    where: { id },
  })
}

export const deletePosition: MutationResolvers['deletePosition'] = ({ id }) => {
  return db.position.delete({
    where: { id },
  })
}

export const Position: PositionResolvers = {
  entrants: (_obj, { root }) =>
    db.position.findUnique({ where: { id: root.id } }).entrants(),
}
