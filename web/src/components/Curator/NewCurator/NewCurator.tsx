import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CuratorForm from 'src/components/Curator/CuratorForm'

const CREATE_CURATOR_MUTATION = gql`
  mutation CreateCuratorMutation($input: CreateCuratorInput!) {
    createCurator(input: $input) {
      id
    }
  }
`

const NewCurator = () => {
  const [createCurator, { loading, error }] = useMutation(
    CREATE_CURATOR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Curator created')
        navigate(routes.curators())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createCurator({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Создание куратора</h2>
      </header>
      <div className="rw-segment-main">
        <CuratorForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCurator
