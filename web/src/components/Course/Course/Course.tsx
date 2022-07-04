import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_COURSE_MUTATION = gql`
  mutation DeleteCourseMutation($id: Int!) {
    deleteCourse(id: $id) {
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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Course = ({ course }) => {
  const [deleteCourse] = useMutation(DELETE_COURSE_MUTATION, {
    onCompleted: () => {
      toast.success('Course deleted')
      navigate(routes.courses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete course ' + id + '?')) {
      deleteCourse({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Course {course.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{course.id}</td>
            </tr><tr>
              <th>Title</th>
              <td>{course.title}</td>
            </tr><tr>
              <th>Category</th>
              <td>{course.category}</td>
            </tr><tr>
              <th>Hours</th>
              <td>{course.hours}</td>
            </tr><tr>
              <th>Final work</th>
              <td>{course.finalWork}</td>
            </tr><tr>
              <th>Begins at</th>
              <td>{timeTag(course.beginsAt)}</td>
            </tr><tr>
              <th>Ends at</th>
              <td>{timeTag(course.endsAt)}</td>
            </tr><tr>
              <th>Periods</th>
              <td>{course.periods}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(course.createdAt)}</td>
            </tr><tr>
              <th>Curator id</th>
              <td>{course.curatorId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCourse({ id: course.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(course.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Course
