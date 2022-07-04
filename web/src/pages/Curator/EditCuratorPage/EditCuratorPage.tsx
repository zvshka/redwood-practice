import EditCuratorCell from 'src/components/Curator/EditCuratorCell'

type CuratorPageProps = {
  id: number
}

const EditCuratorPage = ({ id }: CuratorPageProps) => {
  return <EditCuratorCell id={id} />
}

export default EditCuratorPage
