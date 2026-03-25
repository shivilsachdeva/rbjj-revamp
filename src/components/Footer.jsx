import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
      <a href="https://shivil.co" target="_blank" rel="noreferrer">
        © {new Date().getFullYear()} Designed By Vitruvian Media{' '}
        </a>
      </p>
    </footer>
  )
}
