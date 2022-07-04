import { Button, Container, Textarea, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useNotifications } from '@mantine/notifications'
import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

import { MetaTags, useMutation } from '@redwoodjs/web'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const notifications = useNotifications()
  const [create, { loading }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      notifications.showNotification({
        title: 'Успех',
        message: 'Ваше обращение успешно отправлено',
        color: 'green',
      })
    },
    onError: () => {
      notifications.showNotification({
        title: 'Ошибка',
        message: 'Во время отправления обращения что-то пошло не так',
        color: 'red',
      })
    },
  })

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      title: '',
      message: '',
    },
  })

  const handleSubmit = (values) => {
    console.log(values)
    create({
      variables: {
        input: values,
      },
    })
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Container size={'lg'}>
        <Title order={2} align={'center'}>
          Обратная связь
        </Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Container size={'sm'}>
            <TextInput
              label={'Как к вам обращаться'}
              {...form.getInputProps('name')}
            />
            <TextInput label={'Ваш Email'} {...form.getInputProps('email')} />
            <TextInput
              label={'Тема обращения'}
              {...form.getInputProps('title')}
            />
            <Textarea
              autosize={true}
              label={'Дополнительная информация'}
              {...form.getInputProps('message')}
            />
            <Button type={'submit'} disabled={loading} mt={'xs'}>
              Отправить
            </Button>
          </Container>
        </form>
      </Container>
    </>
  )
}

export default ContactPage
