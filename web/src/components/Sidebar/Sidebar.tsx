import { Box, createStyles, Group, Text } from '@mantine/core'

const useStyles = createStyles(() => ({}))

const Sidebar = () => {
  const { theme } = useStyles()
  return (
    <Group direction={'column'} position={'center'}>
      <Box
        sx={{
          backgroundColor: theme.colors.blue[9],
          height: '100%',
          width: '100%',
          padding: '2rem',
        }}
      >
        <img src="img/cnppm.png" alt="" width={'100%'} />
      </Box>
      <Box
        sx={{
          backgroundColor: theme.colors.blue[9],
          height: '100%',
          width: '100%',
          padding: '2rem',
        }}
      >
        <Group position={'center'}>
          <img src="img/vk.png" alt="" width={'30%'} />
          <Text sx={{ fontSize: theme.fontSizes.xl * 2 }} color={'white'}>
            ВИРО
          </Text>
        </Group>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.colors.blue[9],
          height: '100%',
          width: '100%',
          padding: '2rem',
        }}
      >
        <img src="img/youtube.png" alt="" width={'100%'} />
      </Box>
    </Group>
  )
}

export default Sidebar
