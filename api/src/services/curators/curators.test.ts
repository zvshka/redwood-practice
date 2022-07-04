import {
  curators,
  curator,
  createCurator,
  updateCurator,
  deleteCurator,
} from './curators'
import type { StandardScenario } from './curators.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('curators', () => {
  scenario('returns all curators', async (scenario: StandardScenario) => {
    const result = await curators()

    expect(result.length).toEqual(Object.keys(scenario.curator).length)
  })

  scenario('returns a single curator', async (scenario: StandardScenario) => {
    const result = await curator({ id: scenario.curator.one.id })

    expect(result).toEqual(scenario.curator.one)
  })

  scenario('creates a curator', async () => {
    const result = await createCurator({
      input: { fio: 'String' },
    })

    expect(result.fio).toEqual('String')
  })

  scenario('updates a curator', async (scenario: StandardScenario) => {
    const original = await curator({ id: scenario.curator.one.id })
    const result = await updateCurator({
      id: original.id,
      input: { fio: 'String2' },
    })

    expect(result.fio).toEqual('String2')
  })

  scenario('deletes a curator', async (scenario: StandardScenario) => {
    const original = await deleteCurator({ id: scenario.curator.one.id })
    const result = await curator({ id: original.id })

    expect(result).toEqual(null)
  })
})
