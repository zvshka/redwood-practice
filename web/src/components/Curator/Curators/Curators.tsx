import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Curator/CuratorsCell'

const DELETE_CURATOR_MUTATION = gql`
  mutation DeleteCuratorMutation($id: Int!) {
    deleteCurator(id: $id) {
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

const CuratorsList = ({ curators }) => {
  const [deleteCurator] = useMutation(DELETE_CURATOR_MUTATION, {
    onCompleted: () => {
      toast.success('Куратор удален')
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
    if (confirm('Вы уверены что хотите удалить куратора с id ' + id + '?')) {
      deleteCurator({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>ФИО</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {curators.map((curator) => (
            <tr key={curator.id}>
              <td>{truncate(curator.id)}</td>
              <td>{truncate(curator.fio)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.curator({ id: curator.id })}
                    title={'Show curator ' + curator.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Показать
                  </Link>
                  <Link
                    to={routes.editCurator({ id: curator.id })}
                    title={'Edit curator ' + curator.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Изменить
                  </Link>
                  <button
                    type="button"
                    title={'Delete curator ' + curator.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(curator.id)}
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

export default CuratorsList
