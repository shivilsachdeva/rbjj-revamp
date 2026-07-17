import { useState, useCallback } from 'react'
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

function downloadSchedule() {
  const W = 1080
  const ctx = document.createElement('canvas').getContext('2d')
  const canvas = ctx.canvas

  const margin = 72
  const headerH = 160
  const dayHeaderH = 56
  const rowH = 48
  const dayGap = 32

  let totalH = headerH + margin
  DAYS.forEach(d => {
    totalH += dayHeaderH + d.classes.length * rowH + dayGap
  })
  totalH += 80

  canvas.width = W
  canvas.height = totalH

  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, W, totalH)

  ctx.fillStyle = '#111'
  ctx.font = '700 32px "Helvetica Neue", Helvetica, Arial, sans-serif'
  ctx.textAlign = 'center'
  ctx.letterSpacing = '4px'
  ctx.fillText('RADJI BARRETT JIU JITSU ACADEMY', W / 2, margin + 44)

  ctx.fillStyle = '#888'
  ctx.font = '500 15px "Helvetica Neue", Helvetica, Arial, sans-serif'
  ctx.letterSpacing = '6px'
  ctx.fillText('WEEKLY SCHEDULE', W / 2, margin + 76)

  ctx.strokeStyle = '#ddd'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(margin, margin + 110)
  ctx.lineTo(W - margin, margin + 110)
  ctx.stroke()

  ctx.textAlign = 'left'
  ctx.letterSpacing = '0px'
  let y = headerH + margin

  const fullDays = { mon: 'MONDAY', tue: 'TUESDAY', wed: 'WEDNESDAY', thu: 'THURSDAY', fri: 'FRIDAY', sat: 'SATURDAY', sun: 'SUNDAY' }

  DAYS.forEach(d => {
    ctx.fillStyle = '#111'
    ctx.font = '700 17px "Helvetica Neue", Helvetica, Arial, sans-serif'
    ctx.letterSpacing = '3px'
    ctx.fillText(fullDays[d.id], margin, y + 34)

    ctx.strokeStyle = '#ddd'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(margin, y + dayHeaderH - 4)
    ctx.lineTo(W - margin, y + dayHeaderH - 4)
    ctx.stroke()

    y += dayHeaderH
    ctx.letterSpacing = '0px'

    d.classes.forEach(c => {
      ctx.fillStyle = '#111'
      ctx.font = '600 16px "Helvetica Neue", Helvetica, Arial, sans-serif'
      ctx.fillText(c.time, margin + 12, y + 30)

      ctx.fillStyle = '#333'
      ctx.font = '400 16px "Helvetica Neue", Helvetica, Arial, sans-serif'
      ctx.fillText(c.name, margin + 260, y + 30)

      ctx.fillStyle = '#999'
      ctx.font = '600 12px "Helvetica Neue", Helvetica, Arial, sans-serif'
      ctx.letterSpacing = '1.5px'
      ctx.textAlign = 'right'
      ctx.fillText(c.tag.toUpperCase(), W - margin - 12, y + 30)
      ctx.textAlign = 'left'
      ctx.letterSpacing = '0px'

      ctx.strokeStyle = '#f0f0f0'
      ctx.beginPath()
      ctx.moveTo(margin + 12, y + rowH - 2)
      ctx.lineTo(W - margin - 12, y + rowH - 2)
      ctx.stroke()

      y += rowH
    })

    y += dayGap
  })

  ctx.fillStyle = '#aaa'
  ctx.font = '400 13px "Helvetica Neue", Helvetica, Arial, sans-serif'
  ctx.textAlign = 'center'
  ctx.letterSpacing = '2px'
  ctx.fillText('540 NEW BRUNSWICK AVE, FORDS NJ 08863', W / 2, y + 10)
  ctx.fillText('(646) 248-8020  ·  @RADJIBARRETTJIUJITSU', W / 2, y + 32)

  const link = document.createElement('a')
  link.download = 'rbjj-schedule.png'
  link.href = canvas.toDataURL('image/png')
  link.click()
}

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
                <span className={styles.tag}>{c.tag}</span>
              </li>
            ))}
          </ul>
          {day.note && <p className={styles.note}><i className="fa fa-circle-info" /> {day.note}</p>}
        </div>

        <button className={styles.download} onClick={downloadSchedule}>
          Download Schedule
        </button>
      </div>
    </section>
  )
}
