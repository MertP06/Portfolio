import { FiMapPin, FiCalendar } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading title="Hakkımda" />

      {/* Profile */}
      <Reveal className="mt-12">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-72 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img src={profile.photo} alt={profile.photoAlt} className="w-full aspect-square object-cover" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white">{profile.name}</h2>
            <p className="mt-2 text-lg text-neutral-400">{profile.title}</p>
            <div className="mt-3 flex items-center gap-2 text-neutral-500">
              <FiMapPin className="h-4 w-4" />
              {profile.location}
            </div>
            <div className="mt-6 space-y-4 text-neutral-400 leading-relaxed">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Education */}
      <Reveal className="mt-20">
        <h3 className="text-2xl font-semibold text-white mb-8">Eğitim</h3>
        <div className="space-y-6">
          {profile.education.map((edu) => (
            <div key={edu.school} className="flex gap-6 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center">
                <FiCalendar className="h-6 w-6 text-neutral-400" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">{edu.period}</p>
                <h4 className="text-xl font-medium text-white">{edu.school}</h4>
                <p className="text-neutral-400">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Languages & Hobbies */}
      <div className="mt-20 grid gap-10 md:grid-cols-2">
        <Reveal>
          <h3 className="text-2xl font-semibold text-white mb-6">Diller</h3>
          <div className="space-y-5">
            {profile.languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white">{lang.name}</span>
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

        <Reveal delay={0.1}>
          <h3 className="text-2xl font-semibold text-white mb-6">İlgi Alanları</h3>
          <div className="flex flex-wrap gap-3">
            {profile.hobbies.map((h) => (
              <span
                key={h}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-neutral-300"
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
