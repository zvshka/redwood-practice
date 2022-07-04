import humanize from 'humanize-string'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_ENTRANT_MUTATION = gql`
  mutation DeleteEntrantMutation($id: Int!) {
    deleteEntrant(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
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

const Entrant = ({ entrant }) => {
  const [deleteEntrant] = useMutation(DELETE_ENTRANT_MUTATION, {
    onCompleted: () => {
      toast.success('Абитуриент удален')
      navigate(routes.entrants())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Вы уверены что хотите удалить абитуриента с id ' + id + '?')) {
      deleteEntrant({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Абитуриент {entrant.id}
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{entrant.id}</td>
            </tr>
            <tr>
              <th>Фамилия</th>
              <td>{entrant.lastName}</td>
            </tr>
            <tr>
              <th>Имя</th>
              <td>{entrant.firstName}</td>
            </tr>
            <tr>
              <th>Отчество</th>
              <td>{entrant.middleName}</td>
            </tr>
            <tr>
              <th>ОУ</th>
              <td>{entrant.organization}</td>
            </tr>
            <tr>
              <th>Образование</th>
              <td>{formatEnum(entrant.education)}</td>
            </tr>
            <tr>
              <th>Фамилия в дипломе</th>
              <td>{entrant.diplomaLastname}</td>
            </tr>
            <tr>
              <th>Серия диплома</th>
              <td>{entrant.diplomaSerial}</td>
            </tr>
            <tr>
              <th>Номер диплома</th>
              <td>{entrant.diplomaNumber}</td>
            </tr>
            <tr>
              <th>СНИЛС</th>
              <td>{entrant.snils}</td>
            </tr>
            <tr>
              <th>День рождения</th>
              <td>{timeTag(entrant.birthday)}</td>
            </tr>
            <tr>
              <th>Гражданство</th>
              <td>{entrant.citezenship}</td>
            </tr>
            <tr>
              <th>Создан</th>
              <td>{timeTag(entrant.createdAt)}</td>
            </tr>
            <tr>
              <th>ID Курса</th>
              <td>{entrant.courseId}</td>
            </tr>
            <tr>
              <th>ID Региона</th>
              <td>{entrant.regionId}</td>
            </tr>
            <tr>
              <th>ID Должности</th>
              <td>{entrant.positionId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEntrant({ id: entrant.id })}
          className="rw-button rw-button-blue"
        >
          Изменить
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(entrant.id)}
        >
          Удалить
        </button>
      </nav>
    </>
  )
}

export default Entrant
