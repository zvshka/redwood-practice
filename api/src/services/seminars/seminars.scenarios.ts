import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SeminarCreateArgs>({
  seminar: {
    one: {
      data: {
        title: 'String',
        date: '2022-07-02T16:48:37Z',
        responsible: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        date: '2022-07-02T16:48:37Z',
        responsible: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
