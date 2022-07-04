import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_REGION_MUTATION = gql`
  mutation DeleteRegionMutation($id: Int!) {
    deleteRegion(id: $id) {
      id
    }
  }
`

const Region = ({ region }) => {
  const [deleteRegion] = useMutation(DELETE_REGION_MUTATION, {
    onCompleted: () => {
      toast.success('Region deleted')
      navigate(routes.regions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete region ' + id + '?')) {
      deleteRegion({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Регион {region.id}
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{region.id}</td>
            </tr>
            <tr>
              <th>Название</th>
              <td>{region.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRegion({ id: region.id })}
          className="rw-button rw-button-blue"
        >
          Изменить
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(region.id)}
        >
          Удалить
        </button>
      </nav>
    </>
  )
}

export default Region
