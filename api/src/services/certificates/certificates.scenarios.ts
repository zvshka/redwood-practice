import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CertificateCreateArgs>({
  certificate: {
    one: {
      data: {
        householdCalculation: 'String',
        number: 'String',
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
            birthday: '2022-07-03T20:25:10Z',
            citezenship: 'String',
            course: {
              create: {
                title: 'String',
                category: 'String',
                hours: 9112556,
                finalWork: 'String',
                beginsAt: '2022-07-03T20:25:10Z',
                endsAt: '2022-07-03T20:25:10Z',
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
            birthday: '2022-07-03T20:25:10Z',
            citezenship: 'String',
            course: {
              create: {
                title: 'String',
                category: 'String',
                hours: 3592000,
                finalWork: 'String',
                beginsAt: '2022-07-03T20:25:10Z',
                endsAt: '2022-07-03T20:25:10Z',
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
