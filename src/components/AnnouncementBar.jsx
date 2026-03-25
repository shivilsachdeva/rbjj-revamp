import { useState, useEffect } from 'react'
import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Show after short delay so page loads first
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  if (dismissed) return null

  return (
    <div className={`${styles.overlay} ${visible ? styles.show : ''}`} onClick={() => setDismissed(true)}>
      <div className={styles.bar} onClick={e => e.stopPropagation()}>
        <div className={styles.inner}>
          <div className={styles.label}>📣 Upcoming</div>
          <h2 className={styles.title}>Seminars</h2>
          <p className={styles.body}>
            Stay tuned for upcoming seminars at Radji Barrett Jiu Jitsu Academy.
            Check back soon or contact us for details.
          </p>
          <a href="#contact" className={styles.cta} onClick={() => setDismissed(true)}>
            Get Notified
          </a>
        </div>
        <button className={styles.close} onClick={() => setDismissed(true)} aria-label="Close">
          ✕
        </button>
      </div>
    </div>
  )
}
