import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const update = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.')
      return
    }
    setError('')
    // TODO: wire up EmailJS or backend
    console.log('Form submission:', form)
    setSent(true)
    setForm({ name: '', phone: '', email: '', message: '' })
  }

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
          {sent ? (
            <div className={styles.success}>
              <i className="fa fa-circle-check" />
              <p>Thanks! We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.split}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={update} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="(000) 000-0000" value={form.phone} onChange={update} />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={update} />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us about yourself — experience level, which classes you're interested in..." value={form.message} onChange={update} />
              </div>
              {error && <p className={styles.error}>{error}</p>}
              <button type="submit" className={styles.submit}>Send Message</button>
            </form>
          )}
        </div>

        <div className={styles.map}>
  <iframe
    title="RBJJ Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.5919818862594!2d-74.3137691!3d40.528508699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c92b04ae6c3b%3A0xdf104e75c083f332!2sRadji%20Barrett%20Jiu%20Jitsu!5e0!3m2!1sen!2sus!4v1774457378783!5m2!1sen!2sus"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
      </div>
    </section>
  )
}
