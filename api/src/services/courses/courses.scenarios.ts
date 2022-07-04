import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CourseCreateArgs>({
  course: {
    one: {
      data: {
        title: 'String',
        category: 'String',
        hours: 9453900,
        finalWork: 'String',
        beginsAt: '2022-07-03T20:22:38Z',
        endsAt: '2022-07-03T20:22:38Z',
        periods: 'String',
        curator: { create: { fio: 'String' } },
      },
    },
    two: {
      data: {
        title: 'String',
        category: 'String',
        hours: 1998481,
        finalWork: 'String',
        beginsAt: '2022-07-03T20:22:38Z',
        endsAt: '2022-07-03T20:22:38Z',
        periods: 'String',
        curator: { create: { fio: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
