import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        title: 'String',
        date: '2022-07-02T16:48:59Z',
        responsible: 'String',
        place: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        date: '2022-07-02T16:48:59Z',
        responsible: 'String',
        place: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
