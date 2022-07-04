import type { FindPositions } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Positions from 'src/components/Position/Positions'

export const QUERY = gql`
  query FindPositions {
    positions {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'Должностей пока нет. '}
      <Link to={routes.newPosition()} className="rw-link">
        {'Создать?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ positions }: CellSuccessProps<FindPositions>) => {
  return <Positions positions={positions} />
}
