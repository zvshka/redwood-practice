import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type PositionLayoutProps = {
  children: React.ReactNode
}

const PositionsLayout = ({ children }: PositionLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.positions()} className="rw-link">
            Должности
          </Link>
        </h1>
        <Link to={routes.newPosition()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
          Новая должность
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PositionsLayout
