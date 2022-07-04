import type {
  QueryResolvers,
  MutationResolvers,
  CertificateResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const certificates: QueryResolvers['certificates'] = () => {
  return db.certificate.findMany()
}

export const certificate: QueryResolvers['certificate'] = ({ id }) => {
  return db.certificate.findUnique({
    where: { id },
  })
}

export const createCertificate: MutationResolvers['createCertificate'] = ({
  input,
}) => {
  return db.certificate.create({
    data: input,
  })
}

export const updateCertificate: MutationResolvers['updateCertificate'] = ({
  id,
  input,
}) => {
  return db.certificate.update({
    data: input,
    where: { id },
  })
}

export const deleteCertificate: MutationResolvers['deleteCertificate'] = ({
  id,
}) => {
  return db.certificate.delete({
    where: { id },
  })
}

export const Certificate: CertificateResolvers = {
  entrant: (_obj, { root }) =>
    db.certificate.findUnique({ where: { id: root.id } }).entrant(),
}
