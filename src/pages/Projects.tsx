import { FiArrowUpRight, FiGithub, FiStar, FiLock } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useLanguage } from '../contexts/LanguageContext'

export default function Projects() {
  const { lang, t } = useLanguage()

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        title={t('projects.title')}
        description={t('projects.description')}
      />

      <div className="mt-12 space-y-6">
        {profile.projects.map((project, index) => {
          const CardContent = (
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-neutral-200 transition-colors">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-neutral-300 text-xs border border-white/10 font-medium">
                      <FiStar className="h-3.5 w-3.5 text-amber-400" />
                      {t('projects.featured')}
                    </span>
                  )}
                  {project.isPrivate && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-neutral-400 text-xs border border-white/10">
                      <FiLock className="h-3 w-3 text-neutral-400" />
                      {t('projects.privateRepo')}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-base text-neutral-300 leading-relaxed">
                  {project.description[lang]}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tItem) => (
                    <span
                      key={tItem}
                      className="px-3 py-1 rounded-lg bg-white/5 text-xs text-neutral-400 border border-white/5 font-mono"
                    >
                      {tItem}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 self-end md:self-start">
                {project.url ? (
                  <span className="inline-flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors text-sm font-medium">
                    <FiGithub className="h-5 w-5" />
                    <FiArrowUpRight className="h-5 w-5" />
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-neutral-500 text-xs py-1 px-2.5 rounded-lg border border-white/5 bg-white/[0.02]">
                    <FiLock className="h-3.5 w-3.5" />
                    Private
                  </span>
                )}
              </div>
            </div>
          )

          return (
            <Reveal key={project.name} delay={index * 0.08}>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all group shadow-sm"
                >
                  {CardContent}
                </a>
              ) : (
                <div className="block p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all shadow-sm">
                  {CardContent}
                </div>
              )}
            </Reveal>
          )
        })}
      </div>

      {/* GitHub CTA */}
      <Reveal className="mt-16 text-center">
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white hover:bg-white/5 hover:border-white/25 transition-all text-sm font-medium shadow"
        >
          <FiGithub className="h-5 w-5" />
          {t('projects.allGithub')}
          <FiArrowUpRight className="h-5 w-5" />
        </a>
      </Reveal>
    </section>
  )
}
