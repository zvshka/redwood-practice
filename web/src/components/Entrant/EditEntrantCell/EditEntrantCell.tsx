import type { EditEntrantById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EntrantForm from 'src/components/Entrant/EntrantForm'

export const QUERY = gql`
  query EditEntrantById($id: Int!) {
    entrant: entrant(id: $id) {
      id
      firstName
      lastName
      middleName
      organization
      education
      diplomaLastname
      diplomaSerial
      diplomaNumber
      snils
      birthday
      citizenship
      createdAt
      courseId
      regionId
      positionId
    }
  }
`
const UPDATE_ENTRANT_MUTATION = gql`
  mutation UpdateEntrantMutation($id: Int!, $input: UpdateEntrantInput!) {
    updateEntrant(id: $id, input: $input) {
      id
      firstName
      lastName
      middleName
      organization
      education
      diplomaLastname
      diplomaSerial
      diplomaNumber
      snils
      birthday
      citizenship
      createdAt
      courseId
      regionId
      positionId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ entrant }: CellSuccessProps<EditEntrantById>) => {
  const [updateEntrant, { loading, error }] = useMutation(
    UPDATE_ENTRANT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Абитуриент изменен')
        navigate(routes.entrants())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      courseId: parseInt(input.courseId),
      regionId: parseInt(input.regionId),
      positionId: parseInt(input.positionId),
    })
    updateEntrant({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Изменение абитуриента {entrant.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EntrantForm
          entrant={entrant}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
