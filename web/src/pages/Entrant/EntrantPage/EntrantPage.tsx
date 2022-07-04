import EntrantCell from 'src/components/Entrant/EntrantCell'

type EntrantPageProps = {
  id: number
}

const EntrantPage = ({ id }: EntrantPageProps) => {
  return <EntrantCell id={id} />
}

export default EntrantPage
