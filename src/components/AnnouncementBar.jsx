import { useState, useEffect } from 'react'
import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar({ openWaiver, onOpenWaiver, onCloseWaiver }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const halfway = document.documentElement.scrollHeight * 0.5
      setVisible(window.scrollY + window.innerHeight < halfway)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a href="#contact" className={`${styles.banner} ${visible ? '' : styles.bannerHidden}`}>
        <span className={styles.bannerDot} />
        <span className={styles.bannerText}>Come in for a free trial class today!</span>
      </a>

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
