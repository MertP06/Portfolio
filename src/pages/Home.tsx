import { Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiAward,
} from 'react-icons/fi'
import Reveal from '../components/Reveal'
import TypingText from '../components/TypingText'
import { profile } from '../data/profile'
import { useLanguage } from '../contexts/LanguageContext'

export default function Home() {
  const { lang, t } = useLanguage()

  const titles = profile.titles[lang]

  const metrics = [
    {
      label: t('home.metric.education'),
      value: '2022–2026',
      sub: t('home.metric.educationSub'),
    },
    {
      label: t('home.metric.internships'),
      value: '2',
      sub: t('home.metric.internshipsSub'),
    },
    {
      label: t('home.metric.projects'),
      value: `${profile.projects.length}+`,
      sub: 'GitHub',
    },
  ]

  return (
    <section className="min-h-[calc(100vh-160px)] flex items-center">
      <div className="mx-auto max-w-6xl px-6 py-16 w-full">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left - Text */}
          <Reveal>
            <div className="flex items-center gap-4 text-sm text-neutral-400 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-neutral-300">
                <FiAward className="h-3.5 w-3.5 text-neutral-400" />
                {lang === 'tr' ? 'KTÜN Bilgisayar Mühendisliği Mezunu' : 'BSc Computer Engineering Graduate'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-neutral-500">
                <FiMapPin className="h-4 w-4" />
                {profile.location[lang]}
              </span>
            </div>

            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl tracking-tight">
              {profile.name}
            </h1>

            <div className="mt-4 text-2xl text-neutral-400 sm:text-3xl font-medium">
              <TypingText texts={titles} speed={80} pauseTime={2800} />
            </div>

            <div className="mt-8 space-y-4 text-lg text-neutral-400 leading-relaxed max-w-xl">
              <p>{t('home.intro1')}</p>
              <p>{t('home.intro2')}</p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-200 transition-colors shadow-lg"
              >
                {t('home.aboutBtn')}
                <FiArrowUpRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-medium text-white hover:bg-white/5 hover:border-white/30 transition-all"
              >
                {t('home.contactBtn')}
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4">
              {[
                { icon: FiGithub, href: profile.contact.github, label: 'GitHub' },
                { icon: FiLinkedin, href: profile.contact.linkedin, label: 'LinkedIn' },
                { icon: FiInstagram, href: profile.contact.instagram, label: 'Instagram' },
                { icon: FiMail, href: `mailto:${profile.contact.email}`, label: 'Email' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-neutral-400 hover:border-white/30 hover:text-white hover:bg-white/[0.04] transition-all"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right - Photo */}
          <Reveal delay={0.15} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-96 sm:w-96 sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]">
                <img
                  src={profile.photo}
                  alt={profile.photoAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 w-max max-w-[90vw]">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-white/10 bg-neutral-900/90 backdrop-blur-md px-4 py-3 text-center min-w-[90px] shadow-lg"
                  >
                    <div className="text-base sm:text-lg font-semibold text-white">{m.value}</div>
                    <div className="text-xs text-neutral-400">{m.label}</div>
                    <div className="text-[10px] text-neutral-500 font-medium">{m.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
