import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { profile } from '../data/profile'
import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
  const { lang, t } = useLanguage()

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        title={t('contact.title')}
        description={t('contact.description')}
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-5 items-stretch">
        {/* Form - wider */}
        <Reveal className="lg:col-span-3">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] h-full flex flex-col shadow-sm">
            <h3 className="text-xl font-semibold text-white mb-2">
              {t('contact.sendMessage')}
            </h3>
            <p className="text-neutral-400 text-sm mb-8">
              {t('contact.formDesc')}
            </p>
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
            <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 font-medium">
              {t('contact.emailLabel')}
            </p>
            <p className="text-white group-hover:text-neutral-200 transition-colors font-mono text-sm break-all">
              {profile.contact.email}
            </p>
          </a>

          {/* Location */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
              <FiMapPin className="h-5 w-5 text-neutral-300" />
            </div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 font-medium">
              {t('contact.locationTitle')}
            </p>
            <p className="text-white text-sm">{profile.location[lang]}</p>
          </div>

          {/* Social */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-xs text-neutral-500 uppercase tracking-wider mb-4 font-medium">
              {t('contact.socialTitle')}
            </p>
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: profile.contact.github, label: 'GitHub' },
                { icon: FiLinkedin, href: profile.contact.linkedin, label: 'LinkedIn' },
                { icon: FiInstagram, href: profile.contact.instagram, label: 'Instagram' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-neutral-400 hover:border-white/20 hover:text-white transition-all bg-white/[0.02]"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
