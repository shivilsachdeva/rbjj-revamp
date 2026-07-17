import { useState } from 'react'
import Navbar          from './components/Navbar.jsx'
import Hero            from './components/Hero.jsx'
import About           from './components/About.jsx'
import Instructors     from './components/Instructors.jsx'
import Programs        from './components/Programs.jsx'
import Schedule        from './components/Schedule.jsx'
import Contact         from './components/Contact.jsx'
import Footer          from './components/Footer.jsx'
import AnnouncementBar from './components/AnnouncementBar.jsx'

export default function App() {
  const [waiverOpen, setWaiverOpen] = useState(false)

  return (
    <>
      <AnnouncementBar
        openWaiver={waiverOpen}
        onOpenWaiver={() => setWaiverOpen(true)}
        onCloseWaiver={() => setWaiverOpen(false)}
      />
      <Navbar />
      <Hero onOpenWaiver={() => setWaiverOpen(true)} />
      <About />
      <Programs />
      <Instructors />
      <Schedule />
      <Contact />
      <Footer />
    </>
  )
}
