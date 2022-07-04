import type { EditSeminarById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SeminarForm from 'src/components/Seminar/SeminarForm'

export const QUERY = gql`
  query EditSeminarById($id: Int!) {
    seminar: seminar(id: $id) {
      id
      title
      date
      responsible
    }
  }
`
const UPDATE_SEMINAR_MUTATION = gql`
  mutation UpdateSeminarMutation($id: Int!, $input: UpdateSeminarInput!) {
    updateSeminar(id: $id, input: $input) {
      id
      title
      date
      responsible
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ seminar }: CellSuccessProps<EditSeminarById>) => {
  const [updateSeminar, { loading, error }] = useMutation(
    UPDATE_SEMINAR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Семинар изменен')
        navigate(routes.seminars())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateSeminar({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Изменение семинара {seminar.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SeminarForm
          seminar={seminar}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
