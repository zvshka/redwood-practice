import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_POSITION_MUTATION = gql`
  mutation DeletePositionMutation($id: Int!) {
    deletePosition(id: $id) {
      id
    }
  }
`

const Position = ({ position }) => {
  const [deletePosition] = useMutation(DELETE_POSITION_MUTATION, {
    onCompleted: () => {
      toast.success('Должность удалена')
      navigate(routes.positions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Вы уверены что хотите удалить должность с id ' + id + '?')) {
      deletePosition({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Должность {position.id}
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{position.id}</td>
            </tr>
            <tr>
              <th>Название</th>
              <td>{position.title}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPosition({ id: position.id })}
          className="rw-button rw-button-blue"
        >
          Изменить
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(position.id)}
        >
          Удалить
        </button>
      </nav>
    </>
  )
}

export default Position
