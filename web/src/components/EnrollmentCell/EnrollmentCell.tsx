import 'dayjs/locale/ru'
import {
  Button,
  Container,
  Group,
  Select,
  TextInput,
  Title,
} from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useForm } from '@mantine/form'
import { useNotifications } from '@mantine/notifications'
import {
  CreateEntrantMutation,
  CreateEntrantMutationVariables,
} from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'

export const QUERY = gql`
  query FormQuery {
    courses {
      id
      title
      beginsAt
      endsAt
    }
    regions {
      id
      name
    }
    positions {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

// export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

const CREATE_ENTRANT = gql`
  mutation CreateEntrantMutation($input: CreateEntrantInput!) {
    createEntrant(input: $input) {
      id
    }
  }
`

interface FormValues {
  firstName: string
  lastName: string
  middleName: string
  diplomaLastname: string
  diplomaSerial: string
  diplomaNumber: string
  education: 'MIDDLE' | 'HIGH'
  courseId: number
  regionId: number
  positionId: number
  organization: string
  citizenship: string
  snils: string
  birthday: string
}

export const Success = ({ courses, regions, positions }: CellSuccessProps) => {
  const notifications = useNotifications()
  const [create, { loading }] = useMutation<
    CreateEntrantMutation,
    CreateEntrantMutationVariables
  >(CREATE_ENTRANT, {
    onCompleted: () => {
      notifications.showNotification({
        title: 'Успех',
        message: 'Заявка принята',
        color: 'green',
      })
    },
    onError: () => {},
  })

  const form = useForm<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      diplomaLastname: '',
      diplomaSerial: '',
      diplomaNumber: '',
      education: 'MIDDLE',
      courseId: -1,
      regionId: -1,
      positionId: -1,
      citizenship: '',
      organization: '',
      snils: '',
      birthday: '',
    },
  })

  const handleSubmit = (values: typeof form.values) => {
    values.courseId = parseInt(String(values.courseId))
    values.regionId = parseInt(String(values.regionId))
    values.positionId = parseInt(String(values.positionId))
    create({
      variables: {
        input: values,
      },
    })
  }

  return (
    <Container size={'sm'}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group position={'center'} direction={'column'} grow={true}>
          <Title order={2} align={'center'}>
            Запись на курс
          </Title>
          <Group grow={true}>
            <TextInput
              label={'Фамилия'}
              required
              {...form.getInputProps('firstName')}
            />
            <TextInput
              label={'Имя'}
              required
              {...form.getInputProps('lastName')}
            />
            <TextInput
              label={'Отчество'}
              required
              {...form.getInputProps('middleName')}
            />
          </Group>
          <Group grow={true}>
            <TextInput
              label={'Фамилия в дипломе'}
              required
              {...form.getInputProps('diplomaLastname')}
            />
            <TextInput
              label={'Серия диплома'}
              required
              {...form.getInputProps('diplomaSerial')}
            />
            <TextInput
              label={'Номер диплома'}
              required
              {...form.getInputProps('diplomaNumber')}
            />
          </Group>
          <Group grow={true}>
            <TextInput
              label={'Гражданство'}
              required
              {...form.getInputProps('citizenship')}
            />
            <Select
              data={regions.map((region) => ({
                value: region.id.toString(),
                label: region.name,
              }))}
              {...form.getInputProps('regionId')}
              label={'Регион'}
              required
            />
          </Group>
          <Group grow={true}>
            <TextInput
              label={'СНИЛС'}
              required
              {...form.getInputProps('snils')}
            />
            <DatePicker
              label={'День рождения'}
              required
              locale={'ru'}
              {...form.getInputProps('birthday')}
            />
          </Group>
          <Group grow={true}>
            <Select
              data={positions.map((pos) => ({
                value: pos.id.toString(),
                label: pos.title,
              }))}
              label={'Должность'}
              required
              {...form.getInputProps('positionId')}
            />
            <Select
              data={[
                { value: 'MIDDLE', label: 'Среднее' },
                { value: 'HIGH', label: 'Высшее' },
              ]}
              label={'Образование'}
              required
              {...form.getInputProps('education')}
            />
          </Group>
          <Group grow={true}>
            <TextInput
              label={'Наименование ОУ'}
              required
              {...form.getInputProps('organization')}
            />
            <Select
              data={courses.map((course) => ({
                value: course.id.toString(),
                label: course.title,
              }))}
              label={'Курс'}
              required
              {...form.getInputProps('courseId')}
            />
          </Group>
          <Button disabled={loading} type={'submit'}>
            Отправить
          </Button>
        </Group>
      </form>
    </Container>
  )
}
