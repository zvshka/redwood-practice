import EditEntrantCell from 'src/components/Entrant/EditEntrantCell'

type EntrantPageProps = {
  id: number
}

const EditEntrantPage = ({ id }: EntrantPageProps) => {
  return <EditEntrantCell id={id} />
}

export default EditEntrantPage
