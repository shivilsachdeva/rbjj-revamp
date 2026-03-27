import { useState } from 'react'
import styles from './Contact.module.css'

const WEB3FORMS_KEY = '5456a473-5b0e-4b87-b7cc-9e40acda3546'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const update = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.')
      return
    }
    setError('')
    setLoading(true)

    const now = new Date()
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
    const date = now.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `NEW STUDENT INQUIRY - ${form.name.toUpperCase()}`,
          from_name: form.name,
          email: form.email,
          message: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\nMessage:\n${form.message}\n\n---\nInquired through the website at ${time} on ${date}\n\n---\nRadji Barrett Jiu Jitsu Academy\n540 New Brunswick Ave, Fords NJ 08863\n(646) 248-8020\nradjibarrettjiujitsu.com\n@radjibarrettjiujitsu`,
          replyto: form.email,
          botcheck: '',
        })
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
        setForm({ name: '', phone: '', email: '', message: '' })
      } else {
        setError('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
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
              <p>Inquiry sent!</p>
              <p style={{fontSize:'0.85rem', color:'var(--muted)', marginTop:'-8px', textAlign:'center', lineHeight:'1.6'}}>
                Professor Radji will get back to you soon.<br />
                Check your email for a copy of your message.
              </p>
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
              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
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
