import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EntrantCreateArgs>({
  entrant: {
    one: {
      data: {
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
        course: {
          create: {
            title: 'String',
            category: 'String',
            hours: 1081408,
            finalWork: 'String',
            beginsAt: '2022-07-03T20:24:01Z',
            endsAt: '2022-07-03T20:24:01Z',
            periods: 'String',
            curator: { create: { fio: 'String' } },
          },
        },
        region: { create: { name: 'String' } },
        position: { create: { title: 'String' } },
      },
    },
    two: {
      data: {
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
        course: {
          create: {
            title: 'String',
            category: 'String',
            hours: 5465438,
            finalWork: 'String',
            beginsAt: '2022-07-03T20:24:01Z',
            endsAt: '2022-07-03T20:24:01Z',
            periods: 'String',
            curator: { create: { fio: 'String' } },
          },
        },
        region: { create: { name: 'String' } },
        position: { create: { title: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
