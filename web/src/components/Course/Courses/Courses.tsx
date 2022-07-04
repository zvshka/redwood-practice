import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Course/CoursesCell'

const DELETE_COURSE_MUTATION = gql`
  mutation DeleteCourseMutation($id: Int!) {
    deleteCourse(id: $id) {
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

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const CoursesList = ({ courses }) => {
  const [deleteCourse] = useMutation(DELETE_COURSE_MUTATION, {
    onCompleted: () => {
      toast.success('Course deleted')
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
    if (confirm('Are you sure you want to delete course ' + id + '?')) {
      deleteCourse({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Hours</th>
            <th>Final work</th>
            <th>Begins at</th>
            <th>Ends at</th>
            <th>Periods</th>
            <th>Created at</th>
            <th>Curator id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{truncate(course.id)}</td>
              <td>{truncate(course.title)}</td>
              <td>{truncate(course.category)}</td>
              <td>{truncate(course.hours)}</td>
              <td>{truncate(course.finalWork)}</td>
              <td>{timeTag(course.beginsAt)}</td>
              <td>{timeTag(course.endsAt)}</td>
              <td>{truncate(course.periods)}</td>
              <td>{timeTag(course.createdAt)}</td>
              <td>{truncate(course.curatorId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.course({ id: course.id })}
                    title={'Show course ' + course.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCourse({ id: course.id })}
                    title={'Edit course ' + course.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete course ' + course.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(course.id)}
                  >
                    Delete
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

export default CoursesList
