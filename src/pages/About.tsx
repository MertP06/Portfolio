import { FiMapPin, FiCalendar } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const { lang, t } = useLanguage()

  const hobbies = [
    t('hobby.music'),
    t('hobby.gaming'),
    t('hobby.travel'),
    t('hobby.cinema'),
    t('hobby.tech'),
  ]

  const spokenLanguages = [
    { name: t('lang.turkish'), level: t('lang.turkishLevel') },
    { name: t('lang.english'), level: t('lang.englishLevel') },
  ]

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading title={t('about.title')} />

      {/* Profile Bio */}
      <Reveal className="mt-12">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-72 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-white/[0.02]">
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white">{profile.name}</h2>
            <p className="mt-2 text-lg text-neutral-300 font-medium">
              {profile.titles[lang][0]}
            </p>
            <div className="mt-3 flex items-center gap-2 text-neutral-400 text-sm">
              <FiMapPin className="h-4 w-4 text-neutral-500" />
              <span>{profile.location[lang]}</span>
            </div>
            <div className="mt-6 space-y-4 text-neutral-300 leading-relaxed text-base">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Education */}
      <Reveal className="mt-20">
        <h3 className="text-2xl font-semibold text-white mb-8">
          {t('about.educationTitle')}
        </h3>
        <div className="space-y-6">
          {profile.education.map((edu) => (
            <div
              key={edu.school.en}
              className="flex gap-6 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <FiCalendar className="h-6 w-6 text-neutral-400" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-1 font-mono">{edu.period}</p>
                <h4 className="text-xl font-medium text-white">{edu.school[lang]}</h4>
                <p className="text-neutral-400 text-sm mt-0.5">{edu.degree[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Languages & Hobbies */}
      <div className="mt-20 grid gap-10 md:grid-cols-2">
        <Reveal>
          <h3 className="text-2xl font-semibold text-white mb-6">
            {t('about.languagesTitle')}
          </h3>
          <div className="space-y-3">
            {spokenLanguages.map((l) => (
              <div
                key={l.name}
                className="flex justify-between items-center p-4 rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <span className="text-white font-medium">{l.name}</span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-neutral-300">
                  {l.level}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="text-2xl font-semibold text-white mb-6">
            {t('about.interestsTitle')}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {hobbies.map((h) => (
              <span
                key={h}
                className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-neutral-300 text-sm hover:border-white/20 transition-colors"
              >
                {h}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
