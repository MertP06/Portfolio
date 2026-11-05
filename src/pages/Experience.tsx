import { FiBriefcase, FiBookOpen, FiMapPin, FiCheckCircle } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useLanguage } from '../contexts/LanguageContext'

export default function Experience() {
  const { lang, t } = useLanguage()

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading
        title={t('experience.title')}
        description={t('experience.description')}
      />

      {/* Work / Internship Experience */}
      <Reveal className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <FiBriefcase className="h-6 w-6 text-neutral-300" />
          </div>
          <h2 className="text-2xl font-semibold text-white">
            {t('experience.workHeading')}
          </h2>
        </div>

        <div className="space-y-6">
          {profile.experience.map((exp, index) => (
            <Reveal key={exp.company.en} delay={index * 0.1}>
              <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all shadow-sm">
                <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 font-mono text-xs text-neutral-300">
                    {exp.period[lang]}
                  </span>
                  <span className="flex items-center gap-1.5 text-neutral-500 text-xs">
                    <FiMapPin className="h-3.5 w-3.5" />
                    {exp.location[lang]}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {exp.role[lang]}
                </h3>
                <p className="mt-1 text-base text-neutral-400 font-medium">
                  {exp.company[lang]}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {exp.details[lang].map((detail, dIndex) => (
                    <li
                      key={dIndex}
                      className="flex items-start gap-3 text-neutral-300 text-sm leading-relaxed"
                    >
                      <FiCheckCircle className="mt-0.5 h-4 w-4 text-neutral-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {exp.tags && (
                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* Education */}
      <Reveal className="mt-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <FiBookOpen className="h-6 w-6 text-neutral-300" />
          </div>
          <h2 className="text-2xl font-semibold text-white">
            {t('experience.eduHeading')}
          </h2>
        </div>

        <div className="space-y-6">
          {profile.education.map((edu, index) => (
            <Reveal key={edu.school.en} delay={index * 0.1}>
              <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                <p className="text-xs font-mono text-neutral-500 mb-2">
                  {edu.period}
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {edu.school[lang]}
                </h3>
                <p className="mt-1 text-base text-neutral-400">
                  {edu.degree[lang]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
