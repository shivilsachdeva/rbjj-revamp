import { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'
import AnnouncementBar from './AnnouncementBar.jsx'
import Footer from './Footer.jsx'
import styles from './SeminarPage.module.css'

// Seminar day itself — the countdown under the sign-up button counts to this.
const SEMINAR = new Date('2026-12-05T11:00:00-05:00')

function daysLeftLabel() {
  const days = Math.ceil((SEMINAR - Date.now()) / 86400000)
  if (days > 1) return `Only ${days} days left to sign up`
  if (days === 1) return 'Last day to sign up'
  if (days === 0) return 'Happening today'
  return 'Registration is closed'
}

export default function SeminarPage() {
  const [signupOpen, setSignupOpen] = useState(false)

  useEffect(() => {
    if (!signupOpen) return
    const onKey = e => { if (e.key === 'Escape') setSignupOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [signupOpen])

  return (
    <div className={styles.page}>
      <AnnouncementBar base="/" />
      <Navbar base="/" />

      <main className={styles.wrap}>
        <div className={styles.flyerCol}>
          <div className={styles.flyer}>
            <img src="/images/seminar-jt.png" alt="JT Torres seminar flyer" />
          </div>
        </div>

        <div className={styles.letter}>
          <h1 className={styles.title}>JT Torres Seminar</h1>
          <p className={styles.eyebrow}>Limited spots</p>

          <p className={styles.text}>
            <strong>JT Torres</strong> — 2x ADCC champ, NoGi world champ — is on our mats
            teaching his front headlock game. Technique, live rounds, then promotions to
            close it out. Gi and nogi, all levels, everyone's welcome.
          </p>

          <p className={styles.text}>
            Hang out with the team afterwards for food, drinks, and celebrating our
            promotions!
          </p>

          <table className={styles.details}>
            <tbody>
              <tr><td>Date</td><td>Saturday, December 5</td></tr>
              <tr><td>Time</td><td>11AM – 1PM</td></tr>
              <tr><td>Price</td><td>$80 members · $100 visitors</td></tr>
              <tr><td>Location</td><td>540 New Brunswick Ave, Fords NJ</td></tr>
            </tbody>
          </table>

          <button type="button" className={styles.cta} onClick={() => setSignupOpen(true)}>
            Sign Up Now
          </button>
          <p className={styles.countdown}>{daysLeftLabel()}</p>

          <div className={styles.contact}>
            <p className={styles.contactLead}>Questions?</p>
            <a href="tel:6462488020"><i className="fa fa-phone" /> (646) 248-8020</a>
            <a href="mailto:radjibarrettjiujitsu@gmail.com"><i className="fa fa-envelope" /> radjibarrettjiujitsu@gmail.com</a>
            <a href="https://instagram.com/radjibarrettjiujitsu" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram" /> @radjibarrettjiujitsu
            </a>
          </div>

          <figure className={styles.past}>
            <img src="/images/gym-1.png" alt="The team at the last JT Torres seminar" />
            <figcaption>Last time JT was here</figcaption>
          </figure>
        </div>
      </main>

      <Footer />

      {/* Temporary — delete this banner once the seminar details are final. */}
      <div className={styles.wip}>
        <span><i className="fa fa-triangle-exclamation" /> Under construction — final seminar details pending</span>
      </div>

      {signupOpen && (
        <div className={styles.modalOverlay} onClick={() => setSignupOpen(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setSignupOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
            <p className={styles.modalText}>Pending signup form</p>
          </div>
        </div>
      )}
    </div>
  )
}
