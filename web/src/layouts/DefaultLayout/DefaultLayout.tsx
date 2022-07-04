import { AppShell } from '@mantine/core'

import Footer from 'src/components/Footer/Footer'
import Navbar from 'src/components/Navbar/Navbar'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <AppShell
      footer={<Footer />}
      header={<Navbar />}
      styles={(theme) => ({
        main: {
          minHeight: 'calc(100vh - 175px)',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  )
}

export default DefaultLayout
