import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type EntrantLayoutProps = {
  children: React.ReactNode
}

const EntrantsLayout = ({ children }: EntrantLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.entrants()} className="rw-link">
            Абитуриенты
          </Link>
        </h1>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default EntrantsLayout
