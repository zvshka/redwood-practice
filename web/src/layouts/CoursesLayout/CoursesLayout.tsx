import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CourseLayoutProps = {
  children: React.ReactNode
}

const CoursesLayout = ({ children }: CourseLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.courses()} className="rw-link">
            Курсы
          </Link>
        </h1>
        <Link to={routes.newCourse()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
          Новый курс
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CoursesLayout
