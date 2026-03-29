import styles from './Instructors.module.css'

const INSTRUCTORS = [
  {
    name: 'Radji Bryson-Barrett',
    role: 'Head Black Belt | Head Instructor',
    img: '/images/radji.jpg',
    initials: 'RB',
  },
  {
    name: 'Shlok Sachdeva',
    role: 'Black Belt | Instructor',
    img: '/images/shlok.png',
    initials: 'SS',
  },
  {
    name: 'Shivil Sachdeva',
    role: 'Black Belt | Instructor',
    img: '/images/shivil.png',
    initials: 'SV',
  },
  {
    name: 'Angel Ortiz',
    role: 'Kids Coach',
    img: '/images/angel.png',
    initials: 'AO',
  },
]

export default function Instructors() {
  return (
    <section id="instructors" className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Our Instructors</h2>
        <div className={styles.list}>
          {INSTRUCTORS.map((p) => (
            <div key={p.name} className={styles.card}>
              <div className={styles.photo}>
                {p.img
                  ? <img src={p.img} alt={p.name} loading="lazy" />
                  : <div className={`ph ${styles.initials}`}>{p.initials}</div>
                }
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{p.name}</div>
                <div className={styles.role}>{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
