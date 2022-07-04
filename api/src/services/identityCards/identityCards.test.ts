import {
  identityCards,
  identityCard,
  createIdentityCard,
  updateIdentityCard,
  deleteIdentityCard,
} from './identityCards'
import type { StandardScenario } from './identityCards.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('identityCards', () => {
  scenario('returns all identityCards', async (scenario: StandardScenario) => {
    const result = await identityCards()

    expect(result.length).toEqual(Object.keys(scenario.identityCard).length)
  })

  scenario(
    'returns a single identityCard',
    async (scenario: StandardScenario) => {
      const result = await identityCard({ id: scenario.identityCard.one.id })

      expect(result).toEqual(scenario.identityCard.one)
    }
  )

  scenario('creates a identityCard', async (scenario: StandardScenario) => {
    const result = await createIdentityCard({
      input: {
        householdCalculation: 'String',
        number: 'String',
        serial: 'String',
        giveDate: '2022-07-03T20:25:21Z',
        entrantId: scenario.identityCard.two.entrantId,
      },
    })

    expect(result.householdCalculation).toEqual('String')
    expect(result.number).toEqual('String')
    expect(result.serial).toEqual('String')
    expect(result.giveDate).toEqual('2022-07-03T20:25:21Z')
    expect(result.entrantId).toEqual(scenario.identityCard.two.entrantId)
  })

  scenario('updates a identityCard', async (scenario: StandardScenario) => {
    const original = await identityCard({ id: scenario.identityCard.one.id })
    const result = await updateIdentityCard({
      id: original.id,
      input: { householdCalculation: 'String2' },
    })

    expect(result.householdCalculation).toEqual('String2')
  })

  scenario('deletes a identityCard', async (scenario: StandardScenario) => {
    const original = await deleteIdentityCard({
      id: scenario.identityCard.one.id,
    })
    const result = await identityCard({ id: original.id })

    expect(result).toEqual(null)
  })
})
