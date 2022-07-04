import { Select } from '@mantine/core'
import type { RegionsQuery } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query RegionsQuery {
    regions {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  regions,
  ...others
}: CellSuccessProps<RegionsQuery>) => {
  return (
    <Select
      {...others}
      label={'Регион'}
      data={regions.map((region) => ({
        value: region.id.toString(),
        label: region.name,
      }))}
    />
  )
}
