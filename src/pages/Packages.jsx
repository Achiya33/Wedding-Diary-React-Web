import React from 'react'
import { Download, Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import TextField from '../components/TextField.jsx'
import TextArea from '../components/TextArea.jsx'
import { submitToFormspree } from '../utils/submit.js'
import { getContent } from '../utils/contentStore.js'
import { motion } from 'framer-motion'
import { asset } from '../utils/assetPath.js'

export default function Packages() {
  const site = getContent('site')
  const [form, setForm] = React.useState({
    groomName: '',
    brideName: '',
    email: '',
    phone: '',
    plannedDate: '',
    location: '',
    shootType: 'Wedding',
    functionTime: 'Day Time',
    referral: 'Website',
    message: '',
  })
  const [status, setStatus] = React.useState({ state: 'idle', message: '' })

  function set(name) {
    return (e) => setForm((f) => ({ ...f, [name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })

    try {
      await submitToFormspree(site.formspreeEndpoint, {
        page: 'Packages',
        ...form,
      })
      setStatus({ state: 'success', message: 'Submitted! We will contact you soon.' })
      setForm((f) => ({ ...f, message: '' }))
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
        src={asset("/images/pak/WDC02930.webp")}
        alt="Packages"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-semibold text-white sm:text-6xl lg:text-7xl animate-fade-up">
          Packages
        </h1>
      </div>
    </section>
    
<section className="bg-[#f3f3f1] py-24">
  <div className="mx-auto max-w-[1280px] px-6 text-center">
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-[15px] tracking-[0.08em] text-black/70"
    >
      All Packages
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
      className="mt-5 text-xl font-semibold leading-tight text-black lg:text-4xl"
    >
      Begin Your Journey with Wedding Diary
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      className="mx-auto mt-8 max-w-5xl text-[17px] leading-9 text-black/75"
    >
      Discover our exclusive photography packages, crafted to match every style
      and budget. Let us beautifully capture the essence of your love story
      with artistry and authenticity.
    </motion.p>
  </div>
</section>

    <div className="container-page py-14">
      <div className="mt-10">
        <div className="p-7 sm:p-10">
          

          <form className="mt-7 grid gap-5" onSubmit={onSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField label="Groom's Name" name="groomName" required value={form.groomName} onChange={set('groomName')} />
              <TextField label="Bride's Name" name="brideName" required value={form.brideName} onChange={set('brideName')} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <TextField label="Email" name="email" type="email" required value={form.email} onChange={set('email')} />
              <TextField label="Phone Number" name="phone" required value={form.phone} onChange={set('phone')} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <TextField label="Wedding Date" name="plannedDate" required type="date" value={form.plannedDate} onChange={set('plannedDate')} />
              <TextField label="Location" name="location"required value={form.location} onChange={set('location')} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm text-ink/80">Type of Shoot</span>
                <select
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-4"
                  value={form.shootType}
                  onChange={set('shootType')}
                >
                  <option>Wedding</option>
                  <option>Engagement</option>
                  <option>Pre Wedding</option>
                  <option>Homecoming</option>
                  <option>Casual Shoot</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm text-ink/80">Function Time</span>
                <select
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-4"
                  value={form.functionTime}
                  onChange={set('functionTime')}
                >
                  <option>Day Time</option>
                  <option>Night Time</option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-sm text-ink/80">Source of Referral</span>
              <select
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-4"
                value={form.referral}
                onChange={set('referral')}
              >
                <option>From Friend or Relatives</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Website</option>
                <option>Other</option>
              </select>
            </label>

            <TextArea label="Message" name="message" value={form.message} onChange={set('message')} />

            <button className="btn btn-primary w-full" type="submit" disabled={status.state === 'loading'}>
              <Send size={16} /> {status.state === 'loading' ? 'Sending...' : 'Send & request packages'}
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
 </> )
}
