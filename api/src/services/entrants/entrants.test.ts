import {
  entrants,
  entrant,
  createEntrant,
  updateEntrant,
  deleteEntrant,
} from './entrants'
import type { StandardScenario } from './entrants.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('entrants', () => {
  scenario('returns all entrants', async (scenario: StandardScenario) => {
    const result = await entrants()

    expect(result.length).toEqual(Object.keys(scenario.entrant).length)
  })

  scenario('returns a single entrant', async (scenario: StandardScenario) => {
    const result = await entrant({ id: scenario.entrant.one.id })

    expect(result).toEqual(scenario.entrant.one)
  })

  scenario('creates a entrant', async (scenario: StandardScenario) => {
    const result = await createEntrant({
      input: {
        firstName: 'String',
        lastName: 'String',
        middleName: 'String',
        organization: 'String',
        education: 'MIDDLE',
        diplomaLastname: 'String',
        diplomaSerial: 'String',
        diplomaNumber: 'String',
        snils: 'String',
        birthday: '2022-07-03T20:24:01Z',
        citezenship: 'String',
        courseId: scenario.entrant.two.courseId,
        regionId: scenario.entrant.two.regionId,
        positionId: scenario.entrant.two.positionId,
      },
    })

    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.middleName).toEqual('String')
    expect(result.organization).toEqual('String')
    expect(result.education).toEqual('MIDDLE')
    expect(result.diplomaLastname).toEqual('String')
    expect(result.diplomaSerial).toEqual('String')
    expect(result.diplomaNumber).toEqual('String')
    expect(result.snils).toEqual('String')
    expect(result.birthday).toEqual('2022-07-03T20:24:01Z')
    expect(result.citezenship).toEqual('String')
    expect(result.courseId).toEqual(scenario.entrant.two.courseId)
    expect(result.regionId).toEqual(scenario.entrant.two.regionId)
    expect(result.positionId).toEqual(scenario.entrant.two.positionId)
  })

  scenario('updates a entrant', async (scenario: StandardScenario) => {
    const original = await entrant({ id: scenario.entrant.one.id })
    const result = await updateEntrant({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a entrant', async (scenario: StandardScenario) => {
    const original = await deleteEntrant({ id: scenario.entrant.one.id })
    const result = await entrant({ id: original.id })

    expect(result).toEqual(null)
  })
})
