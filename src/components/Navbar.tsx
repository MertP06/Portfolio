import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import { profile } from '../data/profile'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

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
        scrolled ? 'bg-neutral-950/90 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-200 hover:text-white transition-colors"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
          MP
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 text-sm text-neutral-400 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition-colors ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15 transition-colors"
            href={profile.contact.email ? `mailto:${profile.contact.email}` : '#'}
          >
            Get in Touch
            <FiArrowUpRight />
          </a>

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
        <div className="fixed inset-0 z-40 bg-neutral-950 md:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-2 px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `block px-8 py-4 text-2xl font-medium rounded-2xl transition-colors ${
                    isActive ? 'text-white bg-white/10' : 'text-neutral-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-neutral-900"
              href={profile.contact.email ? `mailto:${profile.contact.email}` : '#'}
            >
              Get in Touch
              <FiArrowUpRight />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
