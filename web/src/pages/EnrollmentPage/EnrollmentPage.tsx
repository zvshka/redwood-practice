import { MetaTags } from '@redwoodjs/web'

import EnrollmentCell from 'src/components/EnrollmentCell'

const EnrollmentPage = () => {
  return (
    <>
      <MetaTags title="Enrollment" description="Enrollment page" />
      <EnrollmentCell />
    </>
  )
}

export default EnrollmentPage
