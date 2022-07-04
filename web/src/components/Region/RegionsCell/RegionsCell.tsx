import type { FindRegions } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Regions from 'src/components/Region/Regions'

export const QUERY = gql`
  query FindRegions {
    regions {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'Нет регионов. '}
      <Link to={routes.newRegion()} className="rw-link">
        {'Создать?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ regions }: CellSuccessProps<FindRegions>) => {
  return <Regions regions={regions} />
}
