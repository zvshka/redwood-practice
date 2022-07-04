import { render } from '@redwoodjs/testing/web'

import EnrollmentPage from './EnrollmentPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EnrollmentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EnrollmentPage />)
    }).not.toThrow()
  })
})
