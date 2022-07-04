import RegionCell from 'src/components/Region/RegionCell'

type RegionPageProps = {
  id: number
}

const RegionPage = ({ id }: RegionPageProps) => {
  return <RegionCell id={id} />
}

export default RegionPage
