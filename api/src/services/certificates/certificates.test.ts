import {
  certificates,
  certificate,
  createCertificate,
  updateCertificate,
  deleteCertificate,
} from './certificates'
import type { StandardScenario } from './certificates.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('certificates', () => {
  scenario('returns all certificates', async (scenario: StandardScenario) => {
    const result = await certificates()

    expect(result.length).toEqual(Object.keys(scenario.certificate).length)
  })

  scenario(
    'returns a single certificate',
    async (scenario: StandardScenario) => {
      const result = await certificate({ id: scenario.certificate.one.id })

      expect(result).toEqual(scenario.certificate.one)
    }
  )

  scenario('creates a certificate', async (scenario: StandardScenario) => {
    const result = await createCertificate({
      input: {
        householdCalculation: 'String',
        entrantId: scenario.certificate.two.entrantId,
        number: 'String',
      },
    })

    expect(result.householdCalculation).toEqual('String')
    expect(result.entrantId).toEqual(scenario.certificate.two.entrantId)
    expect(result.number).toEqual('String')
  })

  scenario('updates a certificate', async (scenario: StandardScenario) => {
    const original = await certificate({ id: scenario.certificate.one.id })
    const result = await updateCertificate({
      id: original.id,
      input: { householdCalculation: 'String2' },
    })

    expect(result.householdCalculation).toEqual('String2')
  })

  scenario('deletes a certificate', async (scenario: StandardScenario) => {
    const original = await deleteCertificate({
      id: scenario.certificate.one.id,
    })
    const result = await certificate({ id: original.id })

    expect(result).toEqual(null)
  })
})
