import { Table } from '@mantine/core'
import dayjs from 'dayjs'
import type { EventsQuery } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query EventsQuery {
    events {
      id
      title
      date
      responsible
      place
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ events }: CellSuccessProps<EventsQuery>) => {
  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>Назавание</th>
          <th>Дата</th>
          <th>Место проведения</th>
          <th>Отвественные</th>
        </tr>
      </thead>
      <tbody>
        {events.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{dayjs(item.date).format('DD.MM.YYYY HH:mm')}</td>
              <td>{item.place}</td>
              <td>{item.responsible}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
