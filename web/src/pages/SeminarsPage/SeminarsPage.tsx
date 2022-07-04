import { Container, Grid, Paper } from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'

import SeminarsCell from 'src/components/SeminarsCell'
import Sidebar from 'src/components/Sidebar/Sidebar'

const SeminarsPage = () => {
  return (
    <>
      <MetaTags title="Seminars" description="Seminars page" />
      <Container size={'lg'}>
        <Grid>
          <Grid.Col span={9}>
            <Paper p={'sm'} shadow={'lg'}>
              <SeminarsCell />
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

export default SeminarsPage
