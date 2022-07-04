import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'

import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import 'dayjs/locale/ru'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <MantineProvider>
      <NotificationsProvider>
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
          <AuthProvider type="dbAuth">
            <RedwoodApolloProvider>
              <Routes />
            </RedwoodApolloProvider>
          </AuthProvider>
        </RedwoodProvider>
      </NotificationsProvider>
    </MantineProvider>
  </FatalErrorBoundary>
)

export default App
