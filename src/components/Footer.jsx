import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Radji Barrett Jiu Jitsu Academy · Fords, NJ ·{' '}
        <a href="https://instagram.com/radjibarrettjiujitsu" target="_blank" rel="noreferrer">
          @radjibarrettjiujitsu
        </a>
      </p>
    </footer>
  )
}
