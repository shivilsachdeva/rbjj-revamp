import { useState, useRef, useCallback } from 'react'
import styles from './Instructors.module.css'

const INSTRUCTORS = [
  {
    name: 'Radji Bryson-Barrett',
    belt: 'Black Belt',
    role: 'Head Instructor',
    img: '/images/radji.jpg',
  },
  {
    name: 'Shlok Sachdeva',
    belt: 'Black Belt',
    role: 'Coach',
    img: '/images/IMG_1639.jpg',
  },
  {
    name: 'Shivil Sachdeva',
    belt: 'Black Belt',
    role: 'Coach',
    img: '/images/IMG_2330.jpg',
  },
  {
    name: 'Eric Limson',
    belt: 'Black Belt',
    role: 'AM Classes',
    img: '/images/IMG_9943.jpg',
  },
  {
    name: 'Angel Ortiz',
    belt: 'Blue Belt',
    role: 'Kids Classes',
    img: '/images/angel.png',
  },
]

export default function Instructors() {
  const [cur, setCur] = useState(0)
  const total = INSTRUCTORS.length
  const touchStart = useRef(null)
  const touchDelta = useRef(0)

  const go = useCallback((i) => {
    setCur((i + total) % total)
  }, [total])

  const handlePrev = () => go(cur - 1)
  const handleNext = () => go(cur + 1)

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
    touchDelta.current = 0
  }
  const onTouchMove = (e) => {
    if (touchStart.current === null) return
    touchDelta.current = e.touches[0].clientX - touchStart.current
  }
  const onTouchEnd = () => {
    if (Math.abs(touchDelta.current) > 50) {
      if (touchDelta.current > 0) handlePrev()
      else handleNext()
    }
    touchStart.current = null
    touchDelta.current = 0
  }

  const p = INSTRUCTORS[cur]

  return (
    <section id="instructors" className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Our Instructors</h2>

        <div
          className={styles.slider}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className={styles.track} style={{ transform: `translateX(-${cur * 100}%)` }}>
            {INSTRUCTORS.map((inst, i) => (
              <div key={i} className={styles.slide}>
                <img src={inst.img} alt={inst.name} />
              </div>
            ))}
          </div>

          <div className={styles.text}>
            <h3 className={styles.name}>{p.name}</h3>
            <span className={styles.info}>{p.belt} · {p.role}</span>
          </div>

          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrev} aria-label="Previous instructor">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNext} aria-label="Next instructor">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
          </button>
        </div>

        <div className={styles.dots}>
          {INSTRUCTORS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === cur ? styles.dotActive : ''}`}
              onClick={() => setCur(i)}
              aria-label={`Go to instructor ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
