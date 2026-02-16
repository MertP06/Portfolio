import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading title="Contact" description="Feel free to reach out to me" />

      <div className="mt-12 grid gap-12 lg:grid-cols-5 items-stretch">
        {/* Form - wider */}
        <Reveal className="lg:col-span-3">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] h-full flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">Send a Message</h3>
            <p className="text-neutral-500 mb-8">Fill out the form, I'll get back to you as soon as possible.</p>
            <div className="flex-1 flex flex-col">
              <ContactForm />
            </div>
          </div>
        </Reveal>

        {/* Info - narrower */}
        <Reveal delay={0.1} className="lg:col-span-2 space-y-6">
          {/* Email */}
          <a
            href={`mailto:${profile.contact.email}`}
            className="block p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
              <FiMail className="h-5 w-5 text-neutral-300" />
            </div>
            <p className="text-sm text-neutral-500 mb-1">Email</p>
            <p className="text-white group-hover:text-neutral-200 transition-colors">{profile.contact.email}</p>
          </a>

          {/* Location */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
              <FiMapPin className="h-5 w-5 text-neutral-300" />
            </div>
            <p className="text-sm text-neutral-500 mb-1">Location</p>
            <p className="text-white">{profile.location}</p>
          </div>

          {/* Social */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-neutral-500 mb-4">Social Media</p>
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: profile.contact.github },
                { icon: FiLinkedin, href: profile.contact.linkedin },
                { icon: FiInstagram, href: profile.contact.instagram },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-neutral-400 hover:border-white/20 hover:text-white transition-all"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="p-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/5">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
              <div>
                <p className="text-emerald-400/80 font-medium">Available</p>
                <p className="text-sm text-neutral-500">Open to internship and project opportunities</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
