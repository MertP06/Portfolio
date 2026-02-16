import { FiCode, FiGlobe, FiDatabase, FiTool } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

const skillGroups = [
  { label: 'Programming Languages', icon: FiCode, items: profile.skills.languages },
  { label: 'Web Technologies', icon: FiGlobe, items: profile.skills.web },
  { label: 'Database', icon: FiDatabase, items: profile.skills.database },
  { label: 'Tools', icon: FiTool, items: profile.skills.tools },
]

export default function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading title="Skills" description="Technologies I've learned and worked with" />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon
          return (
            <Reveal key={group.label} delay={index * 0.1}>
              <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] h-full hover:border-white/20 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-neutral-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{group.label}</h3>
                </div>
                <div className="space-y-5">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-neutral-300">{item.name}</span>
                        <span className="text-neutral-500">{item.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-white/30"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      {/* Languages */}
      <Reveal className="mt-16">
        <h3 className="text-2xl font-semibold text-white mb-8">Languages</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {profile.languages.map((lang) => (
            <div key={lang.name} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="flex justify-between mb-3">
                <span className="text-lg text-white">{lang.name}</span>
                <span className="text-neutral-500">{lang.level}</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-white/30"
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-12 text-center">
        <p className="text-neutral-500">
          Levels are based on my self-assessment. I continue to learn.
        </p>
      </Reveal>
    </section>
  )
}
