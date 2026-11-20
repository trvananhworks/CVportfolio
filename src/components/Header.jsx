import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/site'

const nav = [
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-soft ${
        open ? 'border-b border-ink/8 bg-paper' : scrolled ? 'border-b border-ink/8 bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link to="/" className="group flex items-baseline gap-2" aria-label={`${profile.name} — home`}>
          <span className="font-serif text-xl tracking-tight">Van Anh Tran</span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-iris transition-transform duration-500 ease-soft group-hover:scale-150 sm:block" />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="group relative py-2 text-sm text-ink/75 transition-colors duration-300 hover:text-ink aria-[current=page]:text-ink">
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-px w-full bg-ink transition-transform duration-500 ease-soft ${
                          isActive ? 'scale-x-100' : 'origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={profile.cv}
          download
          className="hidden rounded-full border border-ink/20 px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-500 ease-soft hover:border-ink hover:bg-ink hover:text-paper md:inline-block"
        >
          Download CV
        </a>

        <button
          type="button"
          className="relative -mr-2 grid h-11 w-11 place-items-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`absolute h-px w-6 bg-ink transition-transform duration-500 ease-soft ${open ? 'rotate-45' : '-translate-y-1'}`} />
          <span className={`absolute h-px w-6 bg-ink transition-transform duration-500 ease-soft ${open ? '-rotate-45' : 'translate-y-1'}`} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity,visibility] duration-500 ease-soft md:hidden ${open ? 'visible max-h-[100svh] opacity-100' : 'invisible max-h-0 opacity-0'}`}
      >
        <nav aria-label="Mobile" className="container-x flex min-h-[calc(100svh-72px)] flex-col justify-between pt-8 pb-10">
          <ul className="space-y-2">
            {[{ to: '/', label: 'Home' }, ...nav].map((item, i) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  className="flex items-baseline gap-4 border-b border-ink/10 py-4 font-serif text-4xl font-light aria-[current=page]:italic"
                >
                  <span className="font-sans text-xs text-iris">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="space-y-2 text-sm text-slate">
            <a href={`mailto:${profile.email}`} className="block">{profile.email}</a>
            <a href={profile.cv} download className="block underline underline-offset-4">Download CV</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
