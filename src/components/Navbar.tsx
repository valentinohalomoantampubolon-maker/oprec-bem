import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { recruitmentConfig } from '../config/recruitment'
import { canRegister } from '../config/status'

const navItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Departemen', to: '/departemen' },
  { label: 'Alur & syarat', to: '/alur-pendaftaran' },
  { label: 'Tentang', to: '/tentang' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <a href="#main-content" className="skip-link">Lewati ke konten</a>
      <header className="nav">
        <div className="wrap nav__bar">
          <NavLink to="/" className="nav__brand" aria-label="Oprec BEM FIKTI, ke beranda">
            <img src="/assets/img/logo-bem-fikti.jpg" alt="" width={32} height={32} />
            <span>
              <strong>BEM FIKTI</strong>
              <small>Oprec staf 2026/2027</small>
            </span>
          </NavLink>

          <nav className="nav__links" aria-label="Menu utama">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `nav__link${isActive ? ' active' : ''}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {canRegister() && (
            <a href={recruitmentConfig.registrationFormUrl!} target="_blank" rel="noopener noreferrer" className="btn btn--solid btn--small nav__cta">
              Daftar
            </a>
          )}

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="menu-hp"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Tutup' : 'Menu'}
          </button>
        </div>

        <nav id="menu-hp" className={`nav__drawer${open ? ' is-open' : ''}`} aria-label="Menu" hidden={!open}>
          <div className="wrap">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `nav__drawer-link${isActive ? ' active' : ''}`}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}
