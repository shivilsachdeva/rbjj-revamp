import { useState, useEffect, useRef } from 'react'
import styles from './About.module.css'

// To add real images, replace the placeholder divs with:
// <img src="/images/your-photo.jpg" alt="description" />
const SLIDES_1 = [
  { label: 'COMPETITION PHOTO 1' },
  { label: 'COMPETITION PHOTO 2' },
  { label: 'COMPETITION PHOTO 3' },
]
const SLIDES_2 = [
  { label: 'GYM / CLASS PHOTO 1' },
  { label: 'GYM / CLASS PHOTO 2' },
  { label: 'GYM / CLASS PHOTO 3' },
  { label: 'GYM / CLASS PHOTO 4' },
  { label: 'GYM / CLASS PHOTO 5' },
]

function Carousel({ slides, interval = 5000 }) {
  const [cur, setCur] = useState(0)
  const total = slides.length
  const timer = useRef(null)

  const go = (i) => setCur((i + total) % total)

  useEffect(() => {
    timer.current = setInterval(() => setCur(c => (c + 1) % total), interval)
    return () => clearInterval(timer.current)
  }, [total, interval])

  return (
    <div className={styles.car}>
      <div className={styles.carTrack} style={{ transform: `translateX(-${cur * 100}%)` }}>
        {slides.map((s, i) => (
          <div key={i} className={styles.carSlide}>
            {/* Swap placeholder div for <img src="..." alt="..." /> */}
            <div className="ph" style={{ height: '100%' }}>{s.label}</div>
          </div>
        ))}
      </div>
      <button className={`${styles.carBtn} ${styles.prev}`} onClick={() => go(cur - 1)}>
        <i className="fa fa-chevron-left" />
      </button>
      <button className={`${styles.carBtn} ${styles.next}`} onClick={() => go(cur + 1)}>
        <i className="fa fa-chevron-right" />
      </button>
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button key={i} className={`${styles.dot} ${i === cur ? styles.dotOn : ''}`} onClick={() => go(i)} />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.intro}>
          A martial arts school focused primarily on Brazilian Jiu Jitsu, Kickboxing,
          Self-defense, and Fitness. Located in Fords, NJ.
        </p>

        <Carousel slides={SLIDES_1} interval={5000} />

        <blockquote className={styles.testi}>
          <p>"World-class Jiu Jitsu in a friendly atmosphere. Radji is an intelligent, thoughtful instructor who runs a great school where competitive athletes and hobbyists alike can learn and grow together."</p>
          <cite>— Virginio Minervini</cite>
        </blockquote>

        <h3 className={styles.subhead}>Training at Radji Barrett Jiu Jitsu Academy</h3>
        <p className={styles.body}>Our focus is technical and innovative martial arts training with a commitment to the needs and aspirations of each student.</p>
        <p className={styles.body}>We offer classes for both children and adults, beginners and competitors, and we pride ourselves on our friendly and open atmosphere.</p>
        <p className={styles.body}>At our facility, you will find high-level teaching with a wide range of concepts and fun yet competitive training. With our diverse mix of students and teachers, we have created a solid environment founded on our shared passion for the art of Jiu Jitsu — from hobbyists to seasoned competitors. Professor Radji is at the academy daily along with packed Gi, NoGi, and Kickboxing classes.</p>
        <p className={styles.body}>We look forward to seeing you soon!</p>

        <Carousel slides={SLIDES_2} interval={6200} />
      </div>
    </section>
  )
}
