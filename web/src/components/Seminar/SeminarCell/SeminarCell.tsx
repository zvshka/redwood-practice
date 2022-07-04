import type { FindSeminarById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Seminar from 'src/components/Seminar/Seminar'

export const QUERY = gql`
  query FindSeminarById($id: Int!) {
    seminar: seminar(id: $id) {
      id
      title
      date
      responsible
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Seminar not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ seminar }: CellSuccessProps<FindSeminarById>) => {
  return <Seminar seminar={seminar} />
}
