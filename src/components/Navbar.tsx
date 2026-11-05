import { useState, useEffect } from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'

interface NavKeyItem {
  to: string
  key: string
  end?: boolean
}

const navItems: NavKeyItem[] = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/about', key: 'nav.about' },
  { to: '/skills', key: 'nav.skills' },
  { to: '/projects', key: 'nav.projects' },
  { to: '/experience', key: 'nav.experience' },
  { to: '/contact', key: 'nav.contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 font-bold text-sm tracking-tight text-white hover:bg-white/10 transition-colors"
        >
          MP
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 text-sm text-neutral-400 md:flex rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition-all text-sm ${
                  isActive
                    ? 'text-white bg-white/10 font-medium shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
        </div>

        {/* Right side: Language Switcher & Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs font-medium">
            <button
              onClick={() => setLang('tr')}
              className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
                lang === 'tr'
                  ? 'bg-white text-neutral-950 font-semibold shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Türkçe"
            >
              <FiGlobe className="h-3 w-3" />
              TR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
                lang === 'en'
                  ? 'bg-white text-neutral-950 font-semibold shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="English"
            >
              <FiGlobe className="h-3 w-3" />
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-100 md:hidden hover:border-white/20 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-lg md:hidden flex flex-col justify-center items-center">
          <nav className="flex flex-col items-center gap-3 px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `block px-8 py-3 text-xl font-medium rounded-2xl transition-colors ${
                    isActive ? 'text-white bg-white/10' : 'text-neutral-400 hover:text-white'
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
