import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type EventLayoutProps = {
  children: React.ReactNode
}

const EventsLayout = ({ children }: EventLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.events()} className="rw-link">
            Мероприятия
          </Link>
        </h1>
        <Link to={routes.newEvent()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
          Новое мероприятие
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default EventsLayout
