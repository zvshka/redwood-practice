import {
  Box,
  Container,
  createStyles,
  Footer as Foot,
  Group,
  Text,
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
  footer: {
    background: theme.colors.blue[8],
    color: 'white',
  },
  inner: {
    height: 150,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
}))

const Footer = () => {
  const { classes } = useStyles()
  return (
    <Foot className={classes.footer} height={150}>
      <Container className={classes.inner} size={'lg'}>
        <Group position={'apart'}>
          <Box>
            <Text align={'center'} color={'white'}>
              Телефон приемной <br />
              (4922) 36-68-06 <br />
              E-mail: viro33@mail.ru
            </Text>
          </Box>
          <Box>
            <Text align={'center'} color={'white'}>
              ПН-ПТ <br />
              С 8:30 ДО 17:00 <br />
              (Педагогические работники до 16:30) <br />
              ПЕРЕРЫВ С 12:30 ДО 13:00 <br />
              СБ-ВС <br />
              ВЫХОДНОЙ
            </Text>
          </Box>
          <Box>
            <Text align={'center'} color={'white'}>
              Адреса: <br />
              Корпус на пр. Ленина <br />
              Корпус на ул. Каманина
            </Text>
          </Box>
        </Group>
      </Container>
    </Foot>
  )
}

export default Footer
