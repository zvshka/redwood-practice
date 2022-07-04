import EditRegionCell from 'src/components/Region/EditRegionCell'

type RegionPageProps = {
  id: number
}

const EditRegionPage = ({ id }: RegionPageProps) => {
  return <EditRegionCell id={id} />
}

export default EditRegionPage
