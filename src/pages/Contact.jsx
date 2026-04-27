import React from 'react'
import { Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import TextField from '../components/TextField.jsx'
import TextArea from '../components/TextArea.jsx'
import { submitToFormspree } from '../utils/submit.js'
import { useFirebaseContent } from '../utils/useFirebaseContent.js'
import { asset } from '../utils/assetPath.js'
import { usePageTitle } from '../utils/usePageTitle.js'
import { sanitizeContactForm } from '../utils/sanitize.js'

export default function Contact() {
  usePageTitle('Contact Us')
  const { data: site } = useFirebaseContent('site')
  const [form, setForm] = React.useState({ name: '', email: '', message: '' })
  const [status, setStatus] = React.useState({ state: 'idle', message: '' })

  function set(name) {
    return (e) => setForm((f) => ({ ...f, [name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })

    // Sanitize form data before submission
    const sanitizedForm = sanitizeContactForm(form)

    try {
      await submitToFormspree(site.formspreeEndpoint, {
        page: 'Contact',
        ...sanitizedForm,
      })
      setStatus({ state: 'success', message: 'Message sent! We will reply soon.' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({
        state: 'error',
        message: err?.message || 'Something went wrong. Please try again.',
      })
    }
  }

  return (
 <>
    <section className="relative h-[100vh] min-h-[420px] w-full overflow-hidden">
      <img
        src={asset("/images/pak/WDC09210.webp")}
        alt="Contact Us"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-semibold text-white sm:text-6xl lg:text-7xl animate-fade-up">
          Contact Us
        </h1>
      </div>
    </section>

    <div className="container-page py-14">
      
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="p-7 sm:p-10">
          <h3 className="font-serif text-2xl">Reach us</h3>
          <p className="mt-3 text-sm text-ink/70 leading-relaxed">
            Please don't hesitate to reach out and get in touch with us to discover how we can assist you further.
          </p>

          <div className="mt-7 soft-divider pt-7">
            <h4 className="font-serif text-xl">Details</h4>
            <ul className="mt-4 text-sm text-ink/80 space-y-2">
              <li><strong>Address:</strong> {site.address}</li>
              <li><strong>Phone:</strong> {site.phone}</li>
              <li><strong>Email:</strong> {site.email}</li>
            </ul>
          <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-black/10">
            <iframe
               title="Wedding Diary Location"
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15855.691464900581!2d80.134532!3d6.531426000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3d70219d3214b%3A0xf83fe654ec62209!2sWedding%20Diary%20Photography!5e0!3m2!1sen!2sus!4v1773714030733!5m2!1sen!2sus"
               className="h-[260px] w-full border-0"
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               allowFullScreen
             />
          </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <a className="btn btn-outline" href={site.socials.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a className="btn btn-outline" href={site.socials.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="p-7 sm:p-10">
          <h3 className="font-serif text-2xl">Write us</h3>
          <form className="mt-7 grid gap-5" onSubmit={onSubmit}>
            <TextField label="Name" name="name" required value={form.name} onChange={set('name')} />
            <TextField label="Email" name="email" type="email" required value={form.email} onChange={set('email')} />
            <TextArea label="Message" name="message" required value={form.message} onChange={set('message')} rows={6} />

            <button className="btn btn-primary w-full" type="submit" disabled={status.state === 'loading'}>
              <Send size={16} /> {status.state === 'loading' ? 'Sending...' : 'Send'}
            </button>

            {status.state !== 'idle' ? (
              <p
                className={[
                  'text-sm',
                  status.state === 'success' ? 'text-green-700' : '',
                  status.state === 'error' ? 'text-red-700' : '',
                  status.state === 'loading' ? 'text-ink/70' : '',
                ].join(' ')}
              >
                {status.message || (status.state === 'loading' ? 'Submitting…' : '')}
              </p>
            ) : null}

          </form>
        </div>
      </div>
    </div>  
</>)
}
