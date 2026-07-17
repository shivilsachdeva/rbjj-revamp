import styles from './Programs.module.css'

const PROGRAMS = [
  'Adult Jiu Jitsu (Gi & NoGi)',
  'Kids Jiu Jitsu (Gi & NoGi)',
  'Kickboxing',
]

export default function Programs() {
  return (
    <section className={styles.section}>
      <div className={styles.videoBg}>
        <video autoPlay muted loop playsInline>
          <source src="/videos/bg-video-nogi10-7.mp4" type="video/mp4" />
          <source src="/videos/bg-video-nogi10-7.mov" type="video/quicktime" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Our Programs</h2>
        <ul className={styles.list}>
          {PROGRAMS.map((p, i) => (
            <li key={i} className={styles.item}>{p}</li>
          ))}
        </ul>
        <a href="#contact" className={styles.cta}>Try a Free Class Today</a>
      </div>
    </section>
  )
}
