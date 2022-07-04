import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_CURATOR_MUTATION = gql`
  mutation DeleteCuratorMutation($id: Int!) {
    deleteCurator(id: $id) {
      id
    }
  }
`

const Curator = ({ curator }) => {
  const [deleteCurator] = useMutation(DELETE_CURATOR_MUTATION, {
    onCompleted: () => {
      toast.success('Куратор удален')
      navigate(routes.curators())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Вы уверены что хотите удалить куратора с id ' + id + '?')) {
      deleteCurator({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Куратор {curator.id}
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{curator.id}</td>
            </tr>
            <tr>
              <th>ФИО</th>
              <td>{curator.fio}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCurator({ id: curator.id })}
          className="rw-button rw-button-blue"
        >
          Изменить
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(curator.id)}
        >
          Удалить
        </button>
      </nav>
    </>
  )
}

export default Curator
