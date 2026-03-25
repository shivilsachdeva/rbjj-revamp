import styles from './Hero.module.css'

export default function Hero({ onOpenWaiver }) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        <img src="/images/hero.jpg" alt="Radji Barrett competing" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Radji Barrett</span>
          <span>Jiu Jitsu</span>
          <span>Academy</span>
        </h1>
        <div className={styles.buttons}>
          <a href="#schedule" className={styles.btnPrimary}>View Schedule</a>
          <a href="#contact"  className={styles.btnPrimary}>Get Started Today</a>
          <button onClick={onOpenWaiver} className={styles.btnGhost}>Sign Our Waiver</button>
        </div>
      </div>
    </section>
  )
}
