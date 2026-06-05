import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar({ openWaiver, onOpenWaiver, onCloseWaiver }) {
  return (
    <>
      <a href="#contact" className={styles.banner}>
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
