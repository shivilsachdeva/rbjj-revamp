import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'About Us',    href: '#about' },
  { label: 'Instructors', href: '#instructors' },
  { label: 'Schedule',    href: '#schedule' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={styles.navbar}>
        <a href="#hero" className={styles.logo} aria-label="RBJJ Home">
          <img src="/images/logo.png" alt="RBJJ Logo" style={{width:'100%',height:'100%',objectFit:'contain'}} />
        </a>
        <button
          className={`${styles.hamburger} ${open ? styles.open : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {open && <div className={styles.overlay} onClick={close} />}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
      </div>
    </>
  )
}
