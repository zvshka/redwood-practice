import type {
  QueryResolvers,
  MutationResolvers,
  CuratorResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const curators: QueryResolvers['curators'] = () => {
  return db.curator.findMany()
}

export const curator: QueryResolvers['curator'] = ({ id }) => {
  return db.curator.findUnique({
    where: { id },
  })
}

export const createCurator: MutationResolvers['createCurator'] = ({
  input,
}) => {
  return db.curator.create({
    data: input,
  })
}

export const updateCurator: MutationResolvers['updateCurator'] = ({
  id,
  input,
}) => {
  return db.curator.update({
    data: input,
    where: { id },
  })
}

export const deleteCurator: MutationResolvers['deleteCurator'] = ({ id }) => {
  return db.curator.delete({
    where: { id },
  })
}

export const Curator: CuratorResolvers = {
  courses: (_obj, { root }) =>
    db.curator.findUnique({ where: { id: root.id } }).courses(),
}
