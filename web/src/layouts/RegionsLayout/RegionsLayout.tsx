import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type RegionLayoutProps = {
  children: React.ReactNode
}

const RegionsLayout = ({ children }: RegionLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.regions()} className="rw-link">
            Регионы
          </Link>
        </h1>
        <Link to={routes.newRegion()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
          Новый регион
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default RegionsLayout
