import { Container, Grid, Paper, Title } from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'

import ContactsCell from 'src/components/ContactsCell'
import Sidebar from 'src/components/Sidebar/Sidebar'

const ContactsPage = () => {
  return (
    <>
      <MetaTags title="Contacts" description="Contacts page" />
      <Container size={'lg'}>
        <Grid>
          <Grid.Col span={9}>
            <Title order={2} align={'center'}>
              Обращения
            </Title>
            <Paper shadow={'lg'} p={'xs'}>
              <ContactsCell />
            </Paper>
          </Grid.Col>
          <Grid.Col span={3}>
            <Sidebar />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default ContactsPage
