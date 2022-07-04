import type { FindSeminars } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Seminars from 'src/components/Seminar/Seminars'

export const QUERY = gql`
  query FindSeminars {
    seminars {
      id
      title
      date
      responsible
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'Нет семинаров. '}
      <Link to={routes.newSeminar()} className="rw-link">
        {'Создать?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ seminars }: CellSuccessProps<FindSeminars>) => {
  return <Seminars seminars={seminars} />
}
