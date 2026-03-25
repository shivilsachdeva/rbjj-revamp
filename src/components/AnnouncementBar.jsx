import { useState } from 'react'
import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top banner strip */}
      <div className={styles.banner} onClick={() => setOpen(true)}>
        <span className={styles.bannerDot} />
        <span className={styles.bannerText}>Upcoming Seminar — Uriah Hall · April 18</span>
        <span className={styles.bannerArrow}>→</span>
      </div>

      {/* Modal */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close">✕</button>

            {/* Polaroid / framed flyer */}
            <div className={styles.polaroid}>
              <div className={styles.polaroidInner}>
                <img src="/rbjj-revamp/images/seminar.png" alt="Uriah Hall Seminar Flyer" />
              </div>
              <div className={styles.polaroidCaption}>
                Saturday, April 18 · 11AM–2PM · $150
              </div>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalEyebrow}>📣 Upcoming Event</p>
              <h2 className={styles.modalTitle}>Uriah Hall<br/>Striking Seminar</h2>
              <p className={styles.modalText}>
                Radji Barrett Jiu Jitsu Academy presents a <strong>3-hour striking seminar</strong> with
                UFC veteran and striking specialist <strong>Uriah Hall</strong>.
                Open to all skill levels.
              </p>
              <div className={styles.details}>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Date</span>
                  <span className={styles.detailVal}>Saturday, April 18</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Time</span>
                  <span className={styles.detailVal}>11AM – 2PM</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Price</span>
                  <span className={styles.detailVal}>$150</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Location</span>
                  <span className={styles.detailVal}>540 New Brunswick Ave, Fords NJ</span>
                </div>
              </div>
              <a
                href="#contact"
                className={styles.modalCta}
                onClick={() => setOpen(false)}
              >
                Contact Us to Register
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
