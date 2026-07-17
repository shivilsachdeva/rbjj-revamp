import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './About.module.css'

const SLIDES = [
  { img: '/images/IMG_9771.jpg', label: 'Training' },
  { img: '/images/IMG_2598.jpg', label: 'Training' },
  { img: '/images/IMG_6563-3.jpg', label: 'Training' },
  { img: '/images/IMG_2128-2.jpg', label: 'Training' },
  { img: '/images/IMG_2339.jpg', label: 'Training' },
  { img: '/images/IMG_9728.jpg', label: 'Training' },
  { img: '/images/IMG_2826.jpg', label: 'Training' },
  { img: '/images/IMG_2425.jpg', label: 'Training' },
  { img: '/images/IMG_9602.jpg', label: 'Training' },
  { img: '/images/IMG_2761.jpg', label: 'Training' },
  { img: '/images/IMG_9884.jpg', label: 'Training' },
  { img: '/images/IMG_6502-3.jpg', label: 'Training' },
  { img: '/images/gym-6.png', label: 'Training' },
]

function Carousel({ slides, interval = 5000 }) {
  const [cur, setCur] = useState(0)
  const total = slides.length
  const timer = useRef(null)
  const touchStart = useRef(null)
  const touchDelta = useRef(0)

  const go = useCallback((i) => {
    setCur((i + total) % total)
  }, [total])

  const startAutoplay = useCallback(() => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      setCur(c => (c + 1) % total)
    }, interval)
  }, [total, interval])

  useEffect(() => {
    startAutoplay()
    return () => clearInterval(timer.current)
  }, [startAutoplay])

  const handlePrev = () => { go(cur - 1); startAutoplay() }
  const handleNext = () => { go(cur + 1); startAutoplay() }

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

  return (
    <div
      className={styles.car}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.carTrack} style={{ transform: `translateX(-${cur * 100}%)` }}>
        {slides.map((s, i) => (
          <div key={i} className={styles.carSlide}>
            <img src={s.img} alt={s.label} loading="lazy" />
          </div>
        ))}
      </div>

      <button className={`${styles.carBtn} ${styles.prev}`} onClick={handlePrev} aria-label="Previous slide">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button className={`${styles.carBtn} ${styles.next}`} onClick={handleNext} aria-label="Next slide">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
      </button>

      <div className={styles.counter}>{cur + 1}/{total}</div>
    </div>
  )
}

export default function About() {
  return (
    <>
      <section id="about" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.title}>About Us</h2>

          <p className={styles.intro}>
            A martial arts school focused primarily on Brazilian Jiu Jitsu, Kickboxing,
            Self-defense, and Fitness. Located in Fords, NJ.
          </p>

          <Carousel slides={SLIDES} interval={5000} />
        </div>
      </section>

      <div className={styles.testiWrap}>
        <blockquote className={styles.testi}>
          <p>"World-class Jiu Jitsu in a friendly atmosphere. Radji is an intelligent, thoughtful instructor who runs a great school where competitive athletes and hobbyists alike can learn and grow together."</p>
          <cite>— Virginio Minervini</cite>
        </blockquote>
      </div>

      <section className={styles.training}>
        <div className={styles.wrap}>
          <h2 className={styles.trainingTitle}>Training at Radji Barrett Jiu Jitsu Academy</h2>
          <p className={styles.body}>Our focus is technical and innovative martial arts training with a commitment to the needs and aspirations of each student.</p>
          <p className={styles.body}>We offer classes for both children and adults, beginners and competitors, and we pride ourselves on our friendly and open atmosphere.</p>
          <p className={styles.body}>At our facility, you will find high-level teaching with a wide range of concepts and fun yet competitive training. With our diverse mix of students and teachers, we have created a solid environment founded on our shared passion for the art of Jiu Jitsu — from hobbyists to seasoned competitors. Professor Radji is at the academy daily along with packed Gi, NoGi, and Kickboxing classes.</p>
          <p className={styles.body}>We look forward to seeing you soon!</p>
        </div>
      </section>
    </>
  )
}
