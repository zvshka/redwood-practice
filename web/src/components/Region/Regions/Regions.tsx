import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Region/RegionsCell'

const DELETE_REGION_MUTATION = gql`
  mutation DeleteRegionMutation($id: Int!) {
    deleteRegion(id: $id) {
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

const RegionsList = ({ regions }) => {
  const [deleteRegion] = useMutation(DELETE_REGION_MUTATION, {
    onCompleted: () => {
      toast.success('Region deleted')
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
    if (confirm('Are you sure you want to delete region ' + id + '?')) {
      deleteRegion({ variables: { id } })
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
          {regions.map((region) => (
            <tr key={region.id}>
              <td>{truncate(region.id)}</td>
              <td>{truncate(region.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.region({ id: region.id })}
                    title={'Show region ' + region.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Показать
                  </Link>
                  <Link
                    to={routes.editRegion({ id: region.id })}
                    title={'Edit region ' + region.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Изменить
                  </Link>
                  <button
                    type="button"
                    title={'Delete region ' + region.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(region.id)}
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

export default RegionsList
