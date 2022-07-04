import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Entrant/EntrantsCell'

const DELETE_ENTRANT_MUTATION = gql`
  mutation DeleteEntrantMutation($id: Int!) {
    deleteEntrant(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const EntrantsList = ({ entrants }) => {
  const [deleteEntrant] = useMutation(DELETE_ENTRANT_MUTATION, {
    onCompleted: () => {
      toast.success('Entrant deleted')
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
    if (confirm('Вы уверены что хотите удалить абитуриента с id ' + id + '?')) {
      deleteEntrant({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Наименование ОУ</th>
            <th>Образование</th>
            <th>Фамилия в дипломе</th>
            <th>Серия диплома</th>
            <th>Номер диплома</th>
            <th>СНИЛС</th>
            <th>День рождения</th>
            <th>Гражданство</th>
            <th>Создан</th>
            <th>ID Курса</th>
            <th>ID Региона</th>
            <th>ID Должности</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {entrants.map((entrant) => (
            <tr key={entrant.id}>
              <td>{truncate(entrant.id)}</td>
              <td>{truncate(entrant.firstName)}</td>
              <td>{truncate(entrant.lastName)}</td>
              <td>{truncate(entrant.middleName)}</td>
              <td>{truncate(entrant.organization)}</td>
              <td>{formatEnum(entrant.education)}</td>
              <td>{truncate(entrant.diplomaLastname)}</td>
              <td>{truncate(entrant.diplomaSerial)}</td>
              <td>{truncate(entrant.diplomaNumber)}</td>
              <td>{truncate(entrant.snils)}</td>
              <td>{timeTag(entrant.birthday)}</td>
              <td>{truncate(entrant.citezenship)}</td>
              <td>{timeTag(entrant.createdAt)}</td>
              <td>{truncate(entrant.courseId)}</td>
              <td>{truncate(entrant.regionId)}</td>
              <td>{truncate(entrant.positionId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.entrant({ id: entrant.id })}
                    title={'Show entrant ' + entrant.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Показать
                  </Link>
                  <Link
                    to={routes.editEntrant({ id: entrant.id })}
                    title={'Edit entrant ' + entrant.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Изменить
                  </Link>
                  <button
                    type="button"
                    title={'Delete entrant ' + entrant.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(entrant.id)}
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

export default EntrantsList
