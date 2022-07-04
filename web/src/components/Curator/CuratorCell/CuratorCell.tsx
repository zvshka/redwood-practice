import type { FindCuratorById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Curator from 'src/components/Curator/Curator'

export const QUERY = gql`
  query FindCuratorById($id: Int!) {
    curator: curator(id: $id) {
      id
      fio
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Curator not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ curator }: CellSuccessProps<FindCuratorById>) => {
  return <Curator curator={curator} />
}
