import type {
  QueryResolvers,
  MutationResolvers,
  IdentityCardResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const identityCards: QueryResolvers['identityCards'] = () => {
  return db.identityCard.findMany()
}

export const identityCard: QueryResolvers['identityCard'] = ({ id }) => {
  return db.identityCard.findUnique({
    where: { id },
  })
}

export const createIdentityCard: MutationResolvers['createIdentityCard'] = ({
  input,
}) => {
  return db.identityCard.create({
    data: input,
  })
}

export const updateIdentityCard: MutationResolvers['updateIdentityCard'] = ({
  id,
  input,
}) => {
  return db.identityCard.update({
    data: input,
    where: { id },
  })
}

export const deleteIdentityCard: MutationResolvers['deleteIdentityCard'] = ({
  id,
}) => {
  return db.identityCard.delete({
    where: { id },
  })
}

export const IdentityCard: IdentityCardResolvers = {
  entrant: (_obj, { root }) =>
    db.identityCard.findUnique({ where: { id: root.id } }).entrant(),
}
