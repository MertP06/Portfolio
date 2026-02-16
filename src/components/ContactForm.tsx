import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For now, open mailto with the form data
    const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`)
    const body = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:mert06polat@gmail.com?subject=${subject}&body=${body}`

    setFormState('success')
    setTimeout(() => {
      setFormState('idle')
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const inputClasses =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 placeholder-neutral-500 outline-none transition-all duration-200 focus:border-white/30 focus:bg-white/[0.08] focus:ring-2 focus:ring-white/5'

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
      <div className="grid gap-5 sm:grid-cols-2 mb-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-neutral-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your Full Name"
            className={inputClasses}
            disabled={formState === 'submitting'}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-neutral-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="example@email.com"
            className={inputClasses}
            disabled={formState === 'submitting'}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col mb-5">
        <label htmlFor="message" className="mb-2 block text-sm text-neutral-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Write your message here..."
          className={`${inputClasses} resize-none flex-1 min-h-[150px]`}
          disabled={formState === 'submitting'}
        />
      </div>
      <motion.button
        type="submit"
        disabled={formState === 'submitting' || formState === 'success'}
        whileHover={{ scale: formState === 'idle' ? 1.02 : 1 }}
        whileTap={{ scale: formState === 'idle' ? 0.98 : 1 }}
        className={`relative flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${formState === 'success'
          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
          : formState === 'error'
            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
            : 'bg-neutral-100 text-neutral-950 hover:bg-neutral-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]'
          }`}
      >
        <AnimatePresence mode="wait">
          {formState === 'idle' && (
            <motion.span
              key="idle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              Send
              <FiSend size={16} />
            </motion.span>
          )}
          {formState === 'submitting' && (
            <motion.span
              key="submitting"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="inline-block h-4 w-4 border-2 border-neutral-950 border-t-transparent rounded-full"
              />
              Sending...
            </motion.span>
          )}
          {formState === 'success' && (
            <motion.span
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <FiCheck size={16} />
              Sent!
            </motion.span>
          )}
          {formState === 'error' && (
            <motion.span
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <FiAlertCircle size={16} />
              An error occurred
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  )
}
