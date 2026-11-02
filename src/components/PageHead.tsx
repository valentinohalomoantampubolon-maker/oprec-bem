import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface Crumb { label: string; to?: string }

export function PageHead({ crumbs, title, children }: { crumbs: Crumb[]; title: string; children?: ReactNode }) {
  return (
    <header className="page-head">
      <div className="wrap">
        <nav className="crumbs" aria-label="Posisi halaman">
          <Link to="/">Beranda</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span aria-hidden="true"> / </span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="page-head__title">{title}</h1>
        {children && <div className="page-head__lede">{children}</div>}
      </div>
    </header>
  )
}
