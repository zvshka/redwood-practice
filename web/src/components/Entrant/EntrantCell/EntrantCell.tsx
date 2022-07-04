import type { FindEntrantById } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Entrant from 'src/components/Entrant/Entrant'

export const QUERY = gql`
  query FindEntrantById($id: Int!) {
    entrant: entrant(id: $id) {
      id
      firstName
      lastName
      middleName
      organization
      education
      diplomaLastname
      diplomaSerial
      diplomaNumber
      snils
      birthday
      citizenship
      createdAt
      courseId
      regionId
      positionId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Entrant not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ entrant }: CellSuccessProps<FindEntrantById>) => {
  return <Entrant entrant={entrant} />
}
