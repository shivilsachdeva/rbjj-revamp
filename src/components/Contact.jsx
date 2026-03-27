import { useState, useEffect } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('sent') === 'true') {
      setShowSuccess(true)
      window.history.replaceState({}, '', window.location.pathname)
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
    if (params.get('sent') === 'false') {
      setShowError(true)
      window.history.replaceState({}, '', window.location.pathname)
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

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
            <input type="hidden" name="from_name" value="Radji Barrett Jiu Jitsu Academy" />

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
            <input type="checkbox" name="botcheck" style={{display:'none'}} />

            {showError && (
              <div className={styles.errorBox}>
                <i className="fa fa-circle-exclamation" />
                <div>
                  <p>Submission failed. Please reach us directly:</p>
                  <a href="tel:6462488020">(646) 248-8020</a>
                  <span> · </span>
                  <a href="mailto:radjibarrettjiujitsu@gmail.com">radjibarrettjiujitsu@gmail.com</a>
                </div>
              </div>
            )}

            <button type="submit" className={styles.submit}>Send Message</button>
          </form>
        </div>

        <div className={styles.map}>
          <iframe
            title="RBJJ Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.817!2d-74.31271!3d40.53600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sen!2sus!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Success popup */}
      {showSuccess && (
        <div className={styles.successOverlay} onClick={() => setShowSuccess(false)}>
          <div className={styles.successModal} onClick={e => e.stopPropagation()}>
            <button className={styles.successClose} onClick={() => setShowSuccess(false)}>✕</button>
            <div className={styles.successIcon}><i className="fa fa-circle-check" /></div>
            <h3 className={styles.successTitle}>Inquiry Sent!</h3>
            <p className={styles.successMsg}>Professor Radji will be in touch with you soon.</p>
            <div className={styles.successInfo}>
              <a href="tel:6462488020"><i className="fa fa-phone" /> (646) 248-8020</a>
              <a href="mailto:radjibarrettjiujitsu@gmail.com"><i className="fa fa-envelope" /> radjibarrettjiujitsu@gmail.com</a>
              <a href="https://instagram.com/radjibarrettjiujitsu" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" /> @radjibarrettjiujitsu</a>
              <p><i className="fa fa-location-dot" /> 540 New Brunswick Ave, Fords NJ 08863</p>
            </div>
            <button className={styles.successBtn} onClick={() => setShowSuccess(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}
