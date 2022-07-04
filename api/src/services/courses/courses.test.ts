import {
  courses,
  course,
  createCourse,
  updateCourse,
  deleteCourse,
} from './courses'
import type { StandardScenario } from './courses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('courses', () => {
  scenario('returns all courses', async (scenario: StandardScenario) => {
    const result = await courses()

    expect(result.length).toEqual(Object.keys(scenario.course).length)
  })

  scenario('returns a single course', async (scenario: StandardScenario) => {
    const result = await course({ id: scenario.course.one.id })

    expect(result).toEqual(scenario.course.one)
  })

  scenario('creates a course', async (scenario: StandardScenario) => {
    const result = await createCourse({
      input: {
        title: 'String',
        category: 'String',
        hours: 6396398,
        finalWork: 'String',
        beginsAt: '2022-07-03T20:22:38Z',
        endsAt: '2022-07-03T20:22:38Z',
        periods: 'String',
        curatorId: scenario.course.two.curatorId,
      },
    })

    expect(result.title).toEqual('String')
    expect(result.category).toEqual('String')
    expect(result.hours).toEqual(6396398)
    expect(result.finalWork).toEqual('String')
    expect(result.beginsAt).toEqual('2022-07-03T20:22:38Z')
    expect(result.endsAt).toEqual('2022-07-03T20:22:38Z')
    expect(result.periods).toEqual('String')
    expect(result.curatorId).toEqual(scenario.course.two.curatorId)
  })

  scenario('updates a course', async (scenario: StandardScenario) => {
    const original = await course({ id: scenario.course.one.id })
    const result = await updateCourse({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a course', async (scenario: StandardScenario) => {
    const original = await deleteCourse({ id: scenario.course.one.id })
    const result = await course({ id: original.id })

    expect(result).toEqual(null)
  })
})
