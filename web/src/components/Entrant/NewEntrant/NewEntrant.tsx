import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EntrantForm from 'src/components/Entrant/EntrantForm'

const CREATE_ENTRANT_MUTATION = gql`
  mutation CreateEntrantMutation($input: CreateEntrantInput!) {
    createEntrant(input: $input) {
      id
    }
  }
`

const NewEntrant = () => {
  const [createEntrant, { loading, error }] = useMutation(
    CREATE_ENTRANT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Entrant created')
        navigate(routes.entrants())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      courseId: parseInt(input.courseId),
      regionId: parseInt(input.regionId),
      positionId: parseInt(input.positionId),
    })
    createEntrant({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Entrant</h2>
      </header>
      <div className="rw-segment-main">
        <EntrantForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEntrant
