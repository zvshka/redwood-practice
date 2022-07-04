import { forwardRef } from 'react'

import {
  Box,
  Container,
  createStyles,
  Group,
  Header,
  Menu,
  Text,
  UnstyledButton,
} from '@mantine/core'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors[theme.primaryColor][8],
    borderBottom: 0,
  },

  navigation: {
    backgroundColor: theme.colors[theme.primaryColor][8],
    borderBottom: 0,
  },

  inner: {
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: 'white',
  },

  menuControl: {
    color: 'white',
    padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
    '&:hover': {
      backgroundColor: theme.colors.blue[9],
    },
  },
}))

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string
}

const Navbar = () => {
  const { classes, theme } = useStyles()
  const { isAuthenticated, logOut } = useAuth()
  const NavButton = ({ children, ...other }) => (
    <UnstyledButton {...other} className={classes.menuControl}>
      {children}
    </UnstyledButton>
  )

  const CustomControl = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ text, ...others }: ButtonProps, ref) => (
      <UnstyledButton {...others} ref={ref} className={classes.menuControl}>
        {text}
      </UnstyledButton>
    )
  )

  return (
    <>
      <Header height={150} className={classes.header}>
        <Container size={'lg'} className={classes.inner}>
          <img src="img/logo.png" alt="" width={'90px'} height={'108px'} />
          <Group
            sx={{ color: 'white', textAlign: 'center' }}
            direction={'column'}
            position={'center'}
          >
            <Text weight={700} size={'lg'}>
              Государственное автономное образовательное учреждение <br />
              дополнительного профессионального образования <br />
              Владимирской области
            </Text>
            <Text weight={700} size={'xl'}>
              «Владимирский институт развития образования имени Л.И. Новиковой»
            </Text>
          </Group>
          <Group></Group>
        </Container>
      </Header>
      <Box className={classes.header} mt={theme.spacing.xs / 2}>
        <Container size={'lg'}>
          <Group position={'apart'}>
            <Group spacing={0}>
              <Link to={routes.home()}>
                <NavButton>Главная</NavButton>
              </Link>
              <Menu control={<CustomControl text={'Деятельность'} />}>
                <Menu.Item component={Link} to={routes.eventsPage()}>
                  Мероприятия
                </Menu.Item>
                <Menu.Item component={Link} to={routes.seminarsPage()}>
                  Семинары
                </Menu.Item>
              </Menu>
              <Link to={routes.contact()}>
                <NavButton>Обратная связь</NavButton>
              </Link>
              <Link to={routes.enrollment()}>
                <NavButton>Запись на курс</NavButton>
              </Link>
              {isAuthenticated && (
                <>
                  <Menu control={<CustomControl text={'Таблицы'} />}>
                    <Menu.Item component={Link} to={routes.contacts()}>
                      Обращения
                    </Menu.Item>
                    <Menu.Item component={Link} to={routes.positions()}>
                      Должности
                    </Menu.Item>
                    <Menu.Item component={Link} to={routes.regions()}>
                      Регионы
                    </Menu.Item>
                    <Menu.Item component={Link} to={routes.seminars()}>
                      Семинары
                    </Menu.Item>
                    <Menu.Item component={Link} to={routes.events()}>
                      Мероприятия
                    </Menu.Item>
                    <Menu.Item component={Link} to={routes.curators()}>
                      Кураторы
                    </Menu.Item>
                    <Menu.Item component={Link} to={routes.courses()}>
                      Курсы
                    </Menu.Item>
                    <Menu.Item component={Link} to={routes.entrants()}>
                      Абитуриенты
                    </Menu.Item>
                  </Menu>
                </>
              )}
            </Group>
            {!isAuthenticated ? (
              <Link to={routes.login()}>
                <NavButton>Вход</NavButton>
              </Link>
            ) : (
              <NavButton onClick={logOut}>Выход</NavButton>
            )}
          </Group>
        </Container>
      </Box>
    </>
  )
}
export default Navbar
