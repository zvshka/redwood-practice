import { Container, Grid, Paper, Title } from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'

import EventsCell from 'src/components/EventsCell'
import Sidebar from 'src/components/Sidebar/Sidebar'

const EventsPage = () => {
  return (
    <>
      <MetaTags title="Events" description="Events page" />
      <Container size={'lg'}>
        <Grid>
          <Grid.Col span={9}>
            <Title order={2} align={'center'}>
              Мероприятия
            </Title>
            <Paper p={'xs'} shadow={'lg'}>
              <EventsCell />
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

export default EventsPage
