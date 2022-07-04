import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CuratorCreateArgs>({
  curator: {
    one: { data: { fio: 'String' } },
    two: { data: { fio: 'String' } },
  },
})

export type StandardScenario = typeof standard
