import { FiArrowUpRight, FiGithub, FiStar } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading title="Projeler" description="Üzerinde çalıştığım projeler" />

      <div className="mt-12 space-y-6">
        {profile.projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.1}>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="block p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03] transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-neutral-200 transition-colors">
                      {project.name}
                    </h3>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-neutral-400 text-sm border border-white/10">
                        <FiStar className="h-4 w-4" />
                        Öne Çıkan
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-lg text-neutral-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-full bg-white/5 text-sm text-neutral-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
                    <FiGithub className="h-5 w-5" />
                    <FiArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {/* GitHub CTA */}
      <Reveal className="mt-16 text-center">
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-colors"
        >
          <FiGithub className="h-5 w-5" />
          Tüm projeler için GitHub profilimi ziyaret edin
          <FiArrowUpRight className="h-5 w-5" />
        </a>
      </Reveal>
    </section>
  )
}
