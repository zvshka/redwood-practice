import { render } from '@redwoodjs/testing/web'

import SeminarsPage from './SeminarsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SeminarsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SeminarsPage />)
    }).not.toThrow()
  })
})
