import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Position/PositionsCell'

const DELETE_POSITION_MUTATION = gql`
  mutation DeletePositionMutation($id: Int!) {
    deletePosition(id: $id) {
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

const PositionsList = ({ positions }) => {
  const [deletePosition] = useMutation(DELETE_POSITION_MUTATION, {
    onCompleted: () => {
      toast.success('Должность удалена')
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
    if (confirm('Вы уверены что хотиете удалить должность с id ' + id + '?')) {
      deletePosition({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Название</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position) => (
            <tr key={position.id}>
              <td>{truncate(position.id)}</td>
              <td>{truncate(position.title)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.position({ id: position.id })}
                    title={'Show position ' + position.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Просмотреть
                  </Link>
                  <Link
                    to={routes.editPosition({ id: position.id })}
                    title={'Edit position ' + position.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Изменить
                  </Link>
                  <button
                    type="button"
                    title={'Delete position ' + position.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(position.id)}
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

export default PositionsList
