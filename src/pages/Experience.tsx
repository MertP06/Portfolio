import { FiBriefcase, FiBookOpen, FiMapPin } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function Experience() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading title="Experience" description="My work experience and education background" />

      {/* Work Experience */}
      <Reveal className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
            <FiBriefcase className="h-6 w-6 text-neutral-300" />
          </div>
          <h2 className="text-2xl font-semibold text-white">Work Experience</h2>
        </div>

        <div className="space-y-6">
          {profile.experience.map((exp, index) => (
            <Reveal key={exp.company} delay={index * 0.1}>
              <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/5">{exp.period}</span>
                  <span className="flex items-center gap-1">
                    <FiMapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                <p className="mt-1 text-lg text-neutral-400">{exp.company}</p>
                <ul className="mt-5 space-y-2">
                  {exp.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-neutral-400">
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-white/30 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* Education */}
      <Reveal className="mt-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
            <FiBookOpen className="h-6 w-6 text-neutral-300" />
          </div>
          <h2 className="text-2xl font-semibold text-white">Education</h2>
        </div>

        <div className="space-y-6">
          {profile.education.map((edu, index) => (
            <Reveal key={edu.school} delay={index * 0.1}>
              <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                <p className="text-sm text-neutral-500 mb-2">{edu.period}</p>
                <h3 className="text-2xl font-semibold text-white">{edu.school}</h3>
                <p className="mt-1 text-lg text-neutral-400">{edu.degree}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* Status */}
      <Reveal className="mt-16">
        <div className="p-8 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
            <span className="text-lg text-emerald-400/80">Open to internship and project opportunities</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
