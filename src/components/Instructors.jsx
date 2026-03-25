import styles from './Instructors.module.css'

// Belt colors matching BJJ belt system
const BELT_COLORS = {
  black:  { bg: '#111', stripe: '#c8a96e' },
  brown:  { bg: '#5c3317', stripe: '#c8a96e' },
  purple: { bg: '#4a1a6b', stripe: '#c8a96e' },
  blue:   { bg: '#1a3a6b', stripe: '#c8a96e' },
  white:  { bg: '#e8e8e8', stripe: '#c8a96e' },
}

function BeltIcon({ color = 'white', stripes = 0 }) {
  const belt = BELT_COLORS[color] || BELT_COLORS.white
  const totalStripes = 4
  return (
    <div className={styles.beltWrap} title={`${color} belt`}>
      <div className={styles.belt} style={{ background: belt.bg }}>
        {/* black tip section */}
        <div className={styles.beltTip} />
        {/* stripes */}
        <div className={styles.beltStripes}>
          {Array.from({ length: totalStripes }).map((_, i) => (
            <div
              key={i}
              className={styles.beltStripe}
              style={{ background: i < stripes ? belt.stripe : 'transparent', borderColor: i < stripes ? belt.stripe : 'rgba(255,255,255,0.15)' }}
            />
          ))}
        </div>
      </div>
      <span className={styles.beltLabel}>{color} belt</span>
    </div>
  )
}

const INSTRUCTORS = [
  {
    name: 'Radji Bryson-Barrett',
    role: 'Head Instructor',
    belt: 'black', stripes: 1,
    img: '/rbjj-revamp/images/radji.jpg',
    initials: 'RB',
  },
  {
    name: 'Shlok Sachdeva',
    role: 'Kids Coach',
    belt: 'black', stripes: 0,
    img: '/rbjj-revamp/images/shlok.png',
    initials: 'SS',
  },
  {
    name: 'Shivil Sachdeva',
    role: 'Instructor',
    belt: 'black', stripes: 0,
    img: '/rbjj-revamp/images/shivil.png',
    initials: 'SV',
  },
  {
    name: 'Angel Ortiz',
    role: 'Kids Coach',
    belt: 'blue', stripes: 0,
    img: '/rbjj-revamp/images/angel.png',
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
                <BeltIcon color={p.belt} stripes={p.stripes} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
