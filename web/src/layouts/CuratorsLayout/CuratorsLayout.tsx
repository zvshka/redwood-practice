import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CuratorLayoutProps = {
  children: React.ReactNode
}

const CuratorsLayout = ({ children }: CuratorLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.curators()} className="rw-link">
            Кураторы
          </Link>
        </h1>
        <Link to={routes.newCurator()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
          Новый куратор
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CuratorsLayout
