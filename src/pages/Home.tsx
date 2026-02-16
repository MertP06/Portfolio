import { Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'
import Reveal from '../components/Reveal'
import TypingText from '../components/TypingText'
import { profile } from '../data/profile'

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-160px)] flex items-center">
      <div className="mx-auto max-w-6xl px-6 py-16 w-full">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left - Text */}
          <Reveal>
            <div className="flex items-center gap-3 text-sm text-neutral-400 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-emerald-400/80">
                <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                Available
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FiMapPin className="h-4 w-4" />
                {profile.location}
              </span>
            </div>

            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl tracking-tight">
              {profile.name}
            </h1>

            <div className="mt-4 text-2xl text-neutral-400 sm:text-3xl">
              <TypingText texts={profile.titles} speed={80} pauseTime={3000} />
            </div>

            <div className="mt-8 space-y-4 text-lg text-neutral-400 leading-relaxed max-w-xl">
              <p>
                Hello! I'm Mert. I'm a final year Computer Engineering student at Konya Technical University.
              </p>
              <p>
                I'm interested in software development. I work on Java, web technologies, and database systems. I'm open to learning new things and improving myself.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-200 transition-colors"
              >
                About Me
                <FiArrowUpRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-medium text-white hover:bg-white/5 hover:border-white/30 transition-all"
              >
                Contact
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4">
              {[
                { icon: FiGithub, href: profile.contact.github },
                { icon: FiLinkedin, href: profile.contact.linkedin },
                { icon: FiInstagram, href: profile.contact.instagram },
                { icon: FiMail, href: `mailto:${profile.contact.email}` },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-neutral-400 hover:border-white/30 hover:text-white transition-all"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right - Photo */}
          <Reveal delay={0.15} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-96 sm:w-96 sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 bg-black flex items-center justify-center">
                <span className="text-white text-7xl sm:text-8xl font-bold tracking-tight">MP</span>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {profile.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-3 text-center min-w-[80px]"
                  >
                    <div className="text-lg font-semibold text-white">{m.value}</div>
                    <div className="text-xs text-neutral-400">{m.label}</div>
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
