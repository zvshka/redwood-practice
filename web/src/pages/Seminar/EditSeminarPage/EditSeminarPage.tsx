import EditSeminarCell from 'src/components/Seminar/EditSeminarCell'

type SeminarPageProps = {
  id: number
}

const EditSeminarPage = ({ id }: SeminarPageProps) => {
  return <EditSeminarCell id={id} />
}

export default EditSeminarPage
