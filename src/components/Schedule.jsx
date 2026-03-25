import { useState } from 'react'
import styles from './Schedule.module.css'

const DAYS = [
  { id: 'mon', label: 'Mon', classes: [
    { time: '5:00 – 5:45 PM',      name: 'Kids BJJ (Ages 5–8)',  tag: 'Kids · Gi',    tagClass: 'kids' },
    { time: '5:45 – 6:30 PM',      name: 'Kids BJJ (Ages 9–12)', tag: 'Kids · Gi',    tagClass: 'kids' },
    { time: '6:30 – 7:30 PM',      name: 'Adult BJJ',            tag: 'Adult · Gi',   tagClass: 'gi'   },
    { time: '7:30 – 9:00 PM',      name: 'Open Mat',             tag: 'Open Mat',     tagClass: 'open' },
  ]},
  { id: 'tue', label: 'Tue', classes: [
    { time: '5:00 – 5:45 PM',      name: 'Kids BJJ (Ages 5–8)',  tag: 'Kids · NoGi',  tagClass: 'kids' },
    { time: '5:45 – 6:30 PM',      name: 'Kids BJJ (Ages 9–12)', tag: 'Kids · NoGi',  tagClass: 'kids' },
    { time: '6:30 – 7:30 PM',      name: 'Adult Kickboxing',     tag: 'Kickboxing',   tagClass: 'kick' },
    { time: '7:30 – 8:30 PM',      name: 'Adult BJJ',            tag: 'Adult · NoGi', tagClass: 'nogi' },
    { time: '8:30 – 9:30 PM',      name: 'Open Mat',             tag: 'Open Mat',     tagClass: 'open' },
  ]},
  { id: 'wed', label: 'Wed', classes: [
    { time: '5:00 – 5:45 PM',      name: 'Kids BJJ (Ages 5–8)',  tag: 'Kids · Gi',    tagClass: 'kids' },
    { time: '5:45 – 6:30 PM',      name: 'Kids BJJ (Ages 9–12)', tag: 'Kids · Gi',    tagClass: 'kids' },
    { time: '6:30 – 7:30 PM',      name: 'Adult Fundamentals',   tag: 'Adult · Gi',   tagClass: 'gi'   },
    { time: '7:30 – 8:30 PM',      name: 'Open Mat',             tag: 'Open Mat',     tagClass: 'open' },
  ]},
  { id: 'thu', label: 'Thu', classes: [
    { time: '12:00 – 1:30 PM',     name: 'Adult BJJ',            tag: 'Adult · Gi',   tagClass: 'gi'   },
    { time: '5:00 – 5:45 PM',      name: 'Kids BJJ (Ages 5–8)',  tag: 'Kids · NoGi',  tagClass: 'kids' },
    { time: '5:45 – 6:30 PM',      name: 'Kids BJJ (Ages 9–12)', tag: 'Kids · NoGi',  tagClass: 'kids' },
    { time: '6:30 – 7:30 PM',      name: 'Adult Kickboxing',     tag: 'Kickboxing',   tagClass: 'kick' },
    { time: '7:30 – 8:30 PM',      name: 'Adult BJJ',            tag: 'Adult · NoGi', tagClass: 'nogi' },
    { time: '8:30 – 9:30 PM',      name: 'Open Mat',             tag: 'Open Mat',     tagClass: 'open' },
  ]},
  { id: 'fri', label: 'Fri', classes: [
    { time: '10:00 AM – 12:00 PM', name: 'Adult BJJ',            tag: 'Adult · Gi',   tagClass: 'gi'   },
    { time: '5:00 – 5:45 PM',      name: 'Kids BJJ (Ages 5–8)',  tag: 'Kids · Gi',    tagClass: 'kids' },
    { time: '5:45 – 6:30 PM',      name: 'Kids BJJ (Ages 9–12)', tag: 'Kids · Gi',    tagClass: 'kids' },
    { time: '6:30 – 8:00 PM',      name: 'Study Session',        tag: 'Study',        tagClass: 'study'},
  ]},
  { id: 'sat', label: 'Sat', classes: [
    { time: '9:00 – 10:00 AM',     name: 'NoGi Fundamentals',    tag: 'NoGi',         tagClass: 'nogi' },
    { time: '10:00 – 11:00 AM',    name: 'Adult Kickboxing',     tag: 'Kickboxing',   tagClass: 'kick' },
    { time: '11:00 AM – 12:00 PM', name: 'Adult BJJ',            tag: 'Adult · Gi',   tagClass: 'gi'   },
    { time: '12:00 – 1:00 PM',     name: 'Open Mat',             tag: 'Open Mat',     tagClass: 'open' },
  ]},
  { id: 'sun', label: 'Sun', classes: [
    { time: '10:00 AM – 12:00 PM', name: 'Open Mat',             tag: 'Open Mat',     tagClass: 'open' },
  ]},
]

export default function Schedule() {
  const [active, setActive] = useState('mon')
  const day = DAYS.find(d => d.id === active)

  return (
    <section id="schedule" className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Our Schedule</h2>

        <div className={styles.tabBar}>
          {DAYS.map(d => (
            <button
              key={d.id}
              className={`${styles.tabBtn} ${active === d.id ? styles.tabActive : ''}`}
              onClick={() => setActive(d.id)}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div className={styles.pane}>
          <ul className={styles.list}>
            {day.classes.map((c, i) => (
              <li key={i} className={styles.row}>
                <div className={styles.rowLeft}>
                  <span className={styles.time}>{c.time}</span>
                  <span className={styles.name}>{c.name}</span>
                </div>
                <span className={`${styles.tag} ${styles[c.tagClass]}`}>{c.tag}</span>
              </li>
            ))}
          </ul>
          {day.note && <p className={styles.note}><i className="fa fa-circle-info" /> {day.note}</p>}
        </div>
      </div>
    </section>
  )
}
