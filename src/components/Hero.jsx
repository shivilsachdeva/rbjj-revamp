import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const HERO_IMAGES = [
  '/images/hero.jpg',
  '/images/comp-2.jpg',
  '/images/comp-3.jpg',
]

export default function Hero({ onOpenWaiver }) {
  const [cur, setCur] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCur(c => (c + 1) % HERO_IMAGES.length), 8000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Radji Barrett Jiu Jitsu"
            className={i === cur ? styles.bgActive : styles.bgHidden}
          />
        ))}
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
