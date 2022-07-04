import type { FindEvents } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Events from 'src/components/Event/Events'

export const QUERY = gql`
  query FindEvents {
    events {
      id
      title
      date
      responsible
      place
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'Нет мероприятий. '}
      <Link to={routes.newEvent()} className="rw-link">
        {'Создать?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ events }: CellSuccessProps<FindEvents>) => {
  return <Events events={events} />
}
