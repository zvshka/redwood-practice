import type { EditCuratorById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CuratorForm from 'src/components/Curator/CuratorForm'

export const QUERY = gql`
  query EditCuratorById($id: Int!) {
    curator: curator(id: $id) {
      id
      fio
    }
  }
`
const UPDATE_CURATOR_MUTATION = gql`
  mutation UpdateCuratorMutation($id: Int!, $input: UpdateCuratorInput!) {
    updateCurator(id: $id, input: $input) {
      id
      fio
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ curator }: CellSuccessProps<EditCuratorById>) => {
  const [updateCurator, { loading, error }] = useMutation(
    UPDATE_CURATOR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Куратор изменен')
        navigate(routes.curators())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateCurator({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Изменение куратора {curator.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CuratorForm
          curator={curator}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
