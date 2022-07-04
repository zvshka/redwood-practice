import type { FindEntrants } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Entrants from 'src/components/Entrant/Entrants'

export const QUERY = gql`
  query FindEntrants {
    entrants {
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

export const Empty = () => {
  return <div className="rw-text-center">{'Абитуриентов нет. '}</div>
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ entrants }: CellSuccessProps<FindEntrants>) => {
  return <Entrants entrants={entrants} />
}
