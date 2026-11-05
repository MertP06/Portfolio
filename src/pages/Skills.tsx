import { FiCode, FiGlobe, FiDatabase, FiTool } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useLanguage } from '../contexts/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()

  const skillGroups = [
    {
      labelKey: 'skills.languages',
      icon: FiCode,
      items: profile.skills.languages,
    },
    {
      labelKey: 'skills.web',
      icon: FiGlobe,
      items: profile.skills.web,
    },
    {
      labelKey: 'skills.database',
      icon: FiDatabase,
      items: profile.skills.database,
    },
    {
      labelKey: 'skills.tools',
      icon: FiTool,
      items: profile.skills.tools,
    },
  ]

  const spokenLanguages = [
    {
      name: t('lang.turkish'),
      level: t('lang.turkishLevel'),
    },
    {
      name: t('lang.english'),
      level: t('lang.englishLevel'),
    },
  ]

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        title={t('skills.title')}
        description={t('skills.description')}
      />

      {/* Technical Skill Groups */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon
          return (
            <Reveal key={group.labelKey} delay={index * 0.08}>
              <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] h-full hover:border-white/20 hover:bg-white/[0.03] transition-all flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-neutral-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {t(group.labelKey)}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-auto pt-2">
                  {group.items.map((skillName) => (
                    <span
                      key={skillName}
                      className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.04] text-neutral-200 text-sm font-medium hover:border-white/30 hover:bg-white/[0.08] hover:text-white transition-all shadow-sm"
                    >
                      {skillName}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      {/* Spoken Languages */}
      <Reveal className="mt-16">
        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
          <h3 className="text-xl font-semibold text-white mb-6">
            {t('skills.spoken')}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {spokenLanguages.map((langItem) => (
              <div
                key={langItem.name}
                className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <span className="text-base font-medium text-white">
                  {langItem.name}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-neutral-300">
                  {langItem.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
