// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router, Set } from '@redwoodjs/router'

import CoursesLayout from 'src/layouts/CoursesLayout'
import CuratorsLayout from 'src/layouts/CuratorsLayout'
import DefaultLayout from 'src/layouts/DefaultLayout/DefaultLayout'
import EntrantsLayout from 'src/layouts/EntrantsLayout'
import EventsLayout from 'src/layouts/EventsLayout'
import PositionsLayout from 'src/layouts/PositionsLayout'
import RegionsLayout from 'src/layouts/RegionsLayout'
import SeminarsLayout from 'src/layouts/SeminarsLayout'

import ContactsPage from './pages/ContactsPage/ContactsPage'

const Routes = () => {
  return (
    <Router>
      <Set private unauthenticated={'home'}>
        <Set wrap={CuratorsLayout}>
          <Route path="/curators/new" page={CuratorNewCuratorPage} name="newCurator" />
          <Route path="/curators/{id:Int}/edit" page={CuratorEditCuratorPage} name="editCurator" />
          <Route path="/curators/{id:Int}" page={CuratorCuratorPage} name="curator" />
          <Route path="/curators" page={CuratorCuratorsPage} name="curators" />
        </Set>
        <Set wrap={EntrantsLayout}>
          <Route path="/entrants/new" page={EntrantNewEntrantPage} name="newEntrant" />
          <Route path="/entrants/{id:Int}/edit" page={EntrantEditEntrantPage} name="editEntrant" />
          <Route path="/entrants/{id:Int}" page={EntrantEntrantPage} name="entrant" />
          <Route path="/entrants" page={EntrantEntrantsPage} name="entrants" />
        </Set>
        <Set wrap={PositionsLayout}>
          <Route path="/positions/new" page={PositionNewPositionPage} name="newPosition" />
          <Route path="/positions/{id:Int}/edit" page={PositionEditPositionPage} name="editPosition" />
          <Route path="/positions/{id:Int}" page={PositionPositionPage} name="position" />
          <Route path="/positions" page={PositionPositionsPage} name="positions" />
        </Set>
        <Set wrap={RegionsLayout}>
          <Route path="/regions/new" page={RegionNewRegionPage} name="newRegion" />
          <Route path="/regions/{id:Int}/edit" page={RegionEditRegionPage} name="editRegion" />
          <Route path="/regions/{id:Int}" page={RegionRegionPage} name="region" />
          <Route path="/regions" page={RegionRegionsPage} name="regions" />
        </Set>
        <Set wrap={CoursesLayout}>
          <Route path="/courses/new" page={CourseNewCoursePage} name="newCourse" />
          <Route path="/courses/{id:Int}/edit" page={CourseEditCoursePage} name="editCourse" />
          <Route path="/courses/{id:Int}" page={CourseCoursePage} name="course" />
          <Route path="/courses" page={CourseCoursesPage} name="courses" />
        </Set>
        <Set wrap={EventsLayout}>
          <Route path="/events/new" page={EventNewEventPage} name="newEvent" />
          <Route path="/events/{id:Int}/edit" page={EventEditEventPage} name="editEvent" />
          <Route path="/events/{id:Int}" page={EventEventPage} name="event" />
          <Route path="/events/all" page={EventEventsPage} name="events" />
        </Set>
        <Set wrap={SeminarsLayout}>
          <Route path="/seminars/new" page={SeminarNewSeminarPage} name="newSeminar" />
          <Route path="/seminars/{id:Int}/edit" page={SeminarEditSeminarPage} name="editSeminar" />
          <Route path="/seminars/{id:Int}" page={SeminarSeminarPage} name="seminar" />
          <Route path="/seminars/all" page={SeminarSeminarsPage} name="seminars" />
        </Set>
      </Set>

      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={DefaultLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/enrollment" page={EnrollmentPage} name="enrollment" />
        <Route path="/events" page={EventsPage} name="eventsPage" />
        <Route path="/seminars" page={SeminarsPage} name="seminarsPage" />
        <Route path="/contacts" page={ContactsPage} name="contacts" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
