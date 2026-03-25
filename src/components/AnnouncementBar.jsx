import { useState } from 'react'
import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar({ openWaiver, onOpenWaiver, onCloseWaiver }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={styles.banner} onClick={() => setOpen(true)}>
        <span className={styles.bannerDot} />
        <span className={styles.bannerText}>Upcoming Seminar — Uriah Hall · April 18</span>
        <span className={styles.bannerArrow}>→</span>
      </div>

      {/* Seminar modal */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close">✕</button>
            <div className={styles.modalImg}>
              <img src="/rbjj-revamp/images/seminar.png" alt="Uriah Hall Seminar Flyer" />
            </div>
            <a href="#contact" className={styles.modalCta} onClick={() => setOpen(false)}>
              Contact Us to Register
            </a>
            <div className={styles.modalBody}>
              <p className={styles.modalEyebrow}>🎯 Limited Spots</p>
              <h2 className={styles.modalTitle}>Uriah Hall<br />Striking Seminar</h2>
              <p className={styles.modalText}>
                Radji Barrett Jiu Jitsu Academy presents a <strong>3-hour striking seminar</strong> with
                UFC veteran and striking specialist <strong>Uriah Hall</strong>. Open to all skill levels.
              </p>
              <table className={styles.details}>
                <tbody>
                  <tr><td>Date</td><td>Saturday, April 18</td></tr>
                  <tr><td>Time</td><td>11AM – 2PM</td></tr>
                  <tr><td>Price</td><td>$150</td></tr>
                  <tr><td>Location</td><td>540 New Brunswick Ave, Fords NJ</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Waiver modal */}
      {openWaiver && (
        <div className={styles.waiverOverlay} onClick={onCloseWaiver}>
          <div className={styles.waiverModal} onClick={e => e.stopPropagation()}>
            <button className={styles.waiverClose} onClick={onCloseWaiver} aria-label="Close">✕</button>
            <iframe
              className={styles.waiverFrame}
              src="https://form.jotform.com/241068133938156"
              title="Waiver Form"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}
