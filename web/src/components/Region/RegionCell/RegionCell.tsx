import type { FindRegionById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Region from 'src/components/Region/Region'

export const QUERY = gql`
  query FindRegionById($id: Int!) {
    region: region(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Region not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ region }: CellSuccessProps<FindRegionById>) => {
  return <Region region={region} />
}
