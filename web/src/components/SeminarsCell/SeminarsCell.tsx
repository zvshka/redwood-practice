import { Table } from '@mantine/core'
import type { SeminarsQuery } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query SeminarsQuery {
    seminars {
      id
      title
      date
      responsible
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ seminars }: CellSuccessProps<SeminarsQuery>) => {
  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>Название</th>
          <th>Дата</th>
          <th>Ответственные</th>
        </tr>
      </thead>
      <tbody>
        {seminars.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.responsible}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
