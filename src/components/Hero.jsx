import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        {/* Replace this div with: <img src="/images/hero.jpg" alt="" /> */}
        <img src="/rbjj-revamp/images/hero.jpg" alt="Radji Barrett competing" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Radji<br />Barrett Jiu<br />Jitsu<br />Academy
        </h1>
        <div className={styles.buttons}>
          <a href="#contact" className={`${styles.btn} ${styles.btnOutline}`}>
            Get Started Today
          </a>
          <a href="#" className={`${styles.btn} ${styles.btnDim}`}>
            Sign Our Waiver Here
          </a>
        </div>
      </div>
    </section>
  )
}
