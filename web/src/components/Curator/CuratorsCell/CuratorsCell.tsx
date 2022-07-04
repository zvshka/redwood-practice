import type { FindCurators } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Curators from 'src/components/Curator/Curators'

export const QUERY = gql`
  query FindCurators {
    curators {
      id
      fio
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'Кураторов нет. '}
      <Link to={routes.newCurator()} className="rw-link">
        {'Создать?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ curators }: CellSuccessProps<FindCurators>) => {
  return <Curators curators={curators} />
}
