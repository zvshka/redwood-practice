import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IdentityCardCreateArgs>({
  identityCard: {
    one: {
      data: {
        householdCalculation: 'String',
        number: 'String',
        serial: 'String',
        giveDate: '2022-07-03T20:25:21Z',
        entrant: {
          create: {
            firstName: 'String',
            lastName: 'String',
            middleName: 'String',
            organization: 'String',
            education: 'MIDDLE',
            diplomaLastname: 'String',
            diplomaSerial: 'String',
            diplomaNumber: 'String',
            snils: 'String',
            birthday: '2022-07-03T20:25:21Z',
            citezenship: 'String',
            course: {
              create: {
                title: 'String',
                category: 'String',
                hours: 7809140,
                finalWork: 'String',
                beginsAt: '2022-07-03T20:25:21Z',
                endsAt: '2022-07-03T20:25:21Z',
                periods: 'String',
                curator: { create: { fio: 'String' } },
              },
            },
            region: { create: { name: 'String' } },
            position: { create: { title: 'String' } },
          },
        },
      },
    },
    two: {
      data: {
        householdCalculation: 'String',
        number: 'String',
        serial: 'String',
        giveDate: '2022-07-03T20:25:21Z',
        entrant: {
          create: {
            firstName: 'String',
            lastName: 'String',
            middleName: 'String',
            organization: 'String',
            education: 'MIDDLE',
            diplomaLastname: 'String',
            diplomaSerial: 'String',
            diplomaNumber: 'String',
            snils: 'String',
            birthday: '2022-07-03T20:25:21Z',
            citezenship: 'String',
            course: {
              create: {
                title: 'String',
                category: 'String',
                hours: 7698181,
                finalWork: 'String',
                beginsAt: '2022-07-03T20:25:21Z',
                endsAt: '2022-07-03T20:25:21Z',
                periods: 'String',
                curator: { create: { fio: 'String' } },
              },
            },
            region: { create: { name: 'String' } },
            position: { create: { title: 'String' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
