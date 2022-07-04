import { Table } from '@mantine/core'
import type { ContactsQuery } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ContactsQuery {
    contacts {
      id
      name
      email
      title
      message
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ contacts }: CellSuccessProps<ContactsQuery>) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Как обращаться</th>
          <th>Email</th>
          <th>Заголовок</th>
          <th>Сообщение</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.title}</td>
              <td>{item.message}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
