import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Seminar/SeminarsCell'

const DELETE_SEMINAR_MUTATION = gql`
  mutation DeleteSeminarMutation($id: Int!) {
    deleteSeminar(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const SeminarsList = ({ seminars }) => {
  const [deleteSeminar] = useMutation(DELETE_SEMINAR_MUTATION, {
    onCompleted: () => {
      toast.success('Семинар удален')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Вы уверены что хотите удалить семинар с id ' + id + '?')) {
      deleteSeminar({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Название</th>
            <th>Дата</th>
            <th>Ответственные</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {seminars.map((seminar) => (
            <tr key={seminar.id}>
              <td>{truncate(seminar.id)}</td>
              <td>{truncate(seminar.title)}</td>
              <td>{timeTag(seminar.date)}</td>
              <td>{truncate(seminar.responsible)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.seminar({ id: seminar.id })}
                    title={'Show seminar ' + seminar.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Показать
                  </Link>
                  <Link
                    to={routes.editSeminar({ id: seminar.id })}
                    title={'Edit seminar ' + seminar.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Изменить
                  </Link>
                  <button
                    type="button"
                    title={'Delete seminar ' + seminar.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(seminar.id)}
                  >
                    Удалить
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SeminarsList
