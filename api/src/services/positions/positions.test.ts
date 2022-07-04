import {
  positions,
  position,
  createPosition,
  updatePosition,
  deletePosition,
} from './positions'
import type { StandardScenario } from './positions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('positions', () => {
  scenario('returns all positions', async (scenario: StandardScenario) => {
    const result = await positions()

    expect(result.length).toEqual(Object.keys(scenario.position).length)
  })

  scenario('returns a single position', async (scenario: StandardScenario) => {
    const result = await position({ id: scenario.position.one.id })

    expect(result).toEqual(scenario.position.one)
  })

  scenario('creates a position', async () => {
    const result = await createPosition({
      input: { title: 'String' },
    })

    expect(result.title).toEqual('String')
  })

  scenario('updates a position', async (scenario: StandardScenario) => {
    const original = await position({ id: scenario.position.one.id })
    const result = await updatePosition({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a position', async (scenario: StandardScenario) => {
    const original = await deletePosition({ id: scenario.position.one.id })
    const result = await position({ id: original.id })

    expect(result).toEqual(null)
  })
})
