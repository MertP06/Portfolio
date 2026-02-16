import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-black text-white font-bold text-lg tracking-tight hover:bg-neutral-900 transition-colors shadow-lg"
            >
              MP
            </Link>
            <div className="flex gap-3">
              <a href={profile.contact.github} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-300">
                <FiGithub className="h-4 w-4" />
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-neutral-300">
                <FiLinkedin className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.contact.email}`} className="text-neutral-500 hover:text-neutral-300">
                <FiMail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Mert Polat
          </p>
        </div>
      </div>
    </footer>
  )
}
