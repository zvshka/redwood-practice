import {
  seminars,
  seminar,
  createSeminar,
  updateSeminar,
  deleteSeminar,
} from './seminars'
import type { StandardScenario } from './seminars.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('seminars', () => {
  scenario('returns all seminars', async (scenario: StandardScenario) => {
    const result = await seminars()

    expect(result.length).toEqual(Object.keys(scenario.seminar).length)
  })

  scenario('returns a single seminar', async (scenario: StandardScenario) => {
    const result = await seminar({ id: scenario.seminar.one.id })

    expect(result).toEqual(scenario.seminar.one)
  })

  scenario('creates a seminar', async () => {
    const result = await createSeminar({
      input: {
        title: 'String',
        date: '2022-07-02T16:48:37Z',
        responsible: 'String',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.date).toEqual('2022-07-02T16:48:37Z')
    expect(result.responsible).toEqual('String')
  })

  scenario('updates a seminar', async (scenario: StandardScenario) => {
    const original = await seminar({ id: scenario.seminar.one.id })
    const result = await updateSeminar({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a seminar', async (scenario: StandardScenario) => {
    const original = await deleteSeminar({ id: scenario.seminar.one.id })
    const result = await seminar({ id: original.id })

    expect(result).toEqual(null)
  })
})
