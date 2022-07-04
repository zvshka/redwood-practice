import CuratorCell from 'src/components/Curator/CuratorCell'

type CuratorPageProps = {
  id: number
}

const CuratorPage = ({ id }: CuratorPageProps) => {
  return <CuratorCell id={id} />
}

export default CuratorPage
