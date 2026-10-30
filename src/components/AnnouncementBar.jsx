import { useState, useEffect } from 'react'
import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar({ base = '', openWaiver, onOpenWaiver, onCloseWaiver }) {
  const [teaseOpen, setTeaseOpen] = useState(false)

  useEffect(() => {
    if (!teaseOpen) return
    const onKey = e => { if (e.key === 'Escape') setTeaseOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [teaseOpen])

  return (
    <>
      <button type="button" className={styles.banner} onClick={() => setTeaseOpen(true)}>
        <span className={styles.bannerDot} />
        <span className={styles.bannerText}>Upcoming seminar | December 5th</span>
      </button>

      {/* Seminar teaser — blurred flyer until the details are final */}
      {teaseOpen && (
        <div className={styles.teaseOverlay} onClick={() => setTeaseOpen(false)}>
          <div className={styles.tease} onClick={e => e.stopPropagation()}>
            <button
              type="button"
              className={styles.teaseClose}
              onClick={() => setTeaseOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className={styles.teaseInner}>
              <img src="/images/seminar-jt.png" alt="" className={styles.teaseImg} />
              <span className={styles.teaseText}>Details coming soon</span>
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
