import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type SeminarLayoutProps = {
  children: React.ReactNode
}

const SeminarsLayout = ({ children }: SeminarLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.seminars()} className="rw-link">
            Семинары
          </Link>
        </h1>
        <Link to={routes.newSeminar()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
          Новый семинар
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default SeminarsLayout
