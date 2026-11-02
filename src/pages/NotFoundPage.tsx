import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Halaman tidak ditemukan | BEM FIKTI'
  }, [])

  return (
    <section className="block lost">
      <div className="wrap">
        <p className="lost__code" aria-hidden="true">404</p>
        <h1 className="h2">Halaman ini tidak ada</h1>
        <p className="lede">Alamatnya mungkin salah ketik. Mulai lagi dari beranda atau daftar departemen.</p>
        <div className="closing__row">
          <Link to="/" className="btn btn--solid">Ke beranda</Link>
          <Link to="/departemen" className="link">Lihat departemen</Link>
        </div>
      </div>
    </section>
  )
}
