import { Container, createStyles, Footer as Foot } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  footer: {
    background: theme.colors.blue[8],
    color: 'white',
  },
  inner: {
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))

const Footer = () => {
  const { classes } = useStyles()
  return (
    <Foot className={classes.footer} height={150}>
      <Container className={classes.inner} size={'lg'}>
        Footer
      </Container>
    </Foot>
  )
}

export default Footer
