import type { EditCourseById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CourseForm from 'src/components/Course/CourseForm'

export const QUERY = gql`
  query EditCourseById($id: Int!) {
    course: course(id: $id) {
      id
      title
      category
      hours
      finalWork
      beginsAt
      endsAt
      periods
      createdAt
      curatorId
    }
  }
`
const UPDATE_COURSE_MUTATION = gql`
  mutation UpdateCourseMutation($id: Int!, $input: UpdateCourseInput!) {
    updateCourse(id: $id, input: $input) {
      id
      title
      category
      hours
      finalWork
      beginsAt
      endsAt
      periods
      createdAt
      curatorId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ course }: CellSuccessProps<EditCourseById>) => {
  const [updateCourse, { loading, error }] = useMutation(UPDATE_COURSE_MUTATION, {
    onCompleted: () => {
      toast.success('Course updated')
      navigate(routes.courses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { curatorId: parseInt(input.curatorId), })
    updateCourse({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Course {course.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CourseForm course={course} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
