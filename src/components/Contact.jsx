import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Contact Us</h2>

        <div className={styles.icons}>
          <a href="tel:6462488020" className={styles.iconLink} aria-label="Call us">
            <i className="fa fa-phone" />
          </a>
          <a href="mailto:radjibarrettjiujitsu@gmail.com" className={styles.iconLink} aria-label="Email us">
            <i className="fa fa-envelope" />
          </a>
          <a href="https://instagram.com/radjibarrettjiujitsu" target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="Instagram">
            <i className="fa-brands fa-instagram" />
          </a>
        </div>

        <div className={styles.formBox}>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="5456a473-5b0e-4b87-b7cc-9e40acda3546" />
            <input type="hidden" name="subject" value="NEW STUDENT INQUIRY" />
            <input type="hidden" name="redirect" value="https://radjibarrettjiujitsu.com?sent=true" />

            <div className={styles.split}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Your name" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" name="phone" placeholder="(000) 000-0000" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="you@email.com" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us about yourself — experience level, which classes you're interested in..." required />
            </div>

            {/* Honeypot spam protection */}
            <input type="checkbox" name="botcheck" style={{display:'none'}} />

            <button type="submit" className={styles.submit}>Send Message</button>
          </form>
        </div>

        <div className={styles.map}>
          <iframe
            title="RBJJ Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.817!2d-74.31271!3d40.53600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b85b2e2aaaab%3A0x1!2s540+New+Brunswick+Ave%2C+Fords%2C+NJ+08863!5e0!3m2!1sen!2sus!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
