import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_SEMINAR_MUTATION = gql`
  mutation DeleteSeminarMutation($id: Int!) {
    deleteSeminar(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const Seminar = ({ seminar }) => {
  const [deleteSeminar] = useMutation(DELETE_SEMINAR_MUTATION, {
    onCompleted: () => {
      toast.success('Семинар удален')
      navigate(routes.seminars())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Вы уверены что хотите удалить семинар с id ' + id + '?')) {
      deleteSeminar({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Семинар {seminar.id}
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{seminar.id}</td>
            </tr>
            <tr>
              <th>Название</th>
              <td>{seminar.title}</td>
            </tr>
            <tr>
              <th>Дата</th>
              <td>{timeTag(seminar.date)}</td>
            </tr>
            <tr>
              <th>Отвественные</th>
              <td>{seminar.responsible}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSeminar({ id: seminar.id })}
          className="rw-button rw-button-blue"
        >
          Изменить
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(seminar.id)}
        >
          Удалить
        </button>
      </nav>
    </>
  )
}

export default Seminar
