import type { EditRegionById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RegionForm from 'src/components/Region/RegionForm'

export const QUERY = gql`
  query EditRegionById($id: Int!) {
    region: region(id: $id) {
      id
      name
    }
  }
`
const UPDATE_REGION_MUTATION = gql`
  mutation UpdateRegionMutation($id: Int!, $input: UpdateRegionInput!) {
    updateRegion(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ region }: CellSuccessProps<EditRegionById>) => {
  const [updateRegion, { loading, error }] = useMutation(
    UPDATE_REGION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Регион изменен')
        navigate(routes.regions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateRegion({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Изменение региона {region.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RegionForm
          region={region}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
